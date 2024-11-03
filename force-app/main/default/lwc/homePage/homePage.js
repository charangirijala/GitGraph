import { LightningElement } from "lwc";
import getGithubUser from "@salesforce/apex/GitHubRestController.getGithubUser";
import getContributions from "@salesforce/apex/GitHubRestController.getContributions";

export default class HomePage extends LightningElement {
  selectedYear = new Date().getFullYear();
  userName;
  avatarUrl;
  contributionYears = [];
  buttonStatus = false;
  onUserNameInput(event) {
    const temp = event.target.value;
    this.userName = temp.trim();
    this.buttonStatus = this.userName === "" ? true : false;
    console.log("Name Entered :" + this.userName);
  }
  getUser() {
    getGithubUser({ username: this.userName })
      .then((content) => {
        console.log("User details fetched: ", JSON.stringify(content));
        if (!content.errors) {
          this.avatarUrl = content.data.user.avatarUrl;
          this.userName = content.data.user.login;
          this.contributionYears =
            content.data.user.contributionsCollection.years;
        } else {
          console.log("error: ", JSON.stringify(content.errors));
        }
      })
      .catch((err) => {
        console.log("Error fetching user details: ", err);
      });
  }
  generateGraph() {
    this.template
      .querySelector("c-contributions-graph")
      .callApexForContributions(this.userName, this.selectedYear);
  }

  handleYearChange(event) {
    this.selectedYear = event.detail.value;
    // console.log("HandleYearChange: ", this.selectedYear);
  }
  get options() {
    const opts = [];
    this.contributionYears.forEach((year) => {
      const yearStr = year.toString();
      opts.push({ label: yearStr, value: yearStr });
    });
    // console.log("Options: ", opts);
    return opts;
  }
}