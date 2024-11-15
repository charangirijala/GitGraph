import { LightningElement } from "lwc";
import getGithubUser from "@salesforce/apex/GitHubRestController.getGithubUser";
import getContributions from "@salesforce/apex/GitHubRestController.getContributions";

export default class HomePage extends LightningElement {
  selectedYear = new Date().getFullYear();
  displayUserDetails = false;
  userName;
  fullName;
  avatarUrl;
  userGitLink;
  contributionYears = [];
  buttonStatus = false;
  onUserNameInput(event) {
    const temp = event.target.value;
    this.userName = temp.trim();
    this.buttonStatus = this.userName === "" ? true : false;
    console.log("Name Entered :" + this.userName);
    this.displayUserDetails = false;
  }
  getUser() {
    getGithubUser({ username: this.userName })
      .then((content) => {
        console.log("User details fetched: ", JSON.stringify(content));
        if (!content.errors) {
          this.avatarUrl = content.data.user.avatarUrl;
          this.userName = content.data.user.login;
          this.fullName = content.data.user.name;
          this.userGitLink = "https://github.com/" + this.userName;
          this.contributionYears =
            content.data.user.contributionsCollection.years;
          this.displayUserDetails = true;
        } else {
          console.log("error: ", JSON.stringify(content.errors));
        }
      })
      .catch((err) => {
        console.log("Error fetching user details: ", err);
      });
  }

  handleYearChange(event) {
    this.selectedYear = event.detail.value;
    this.template
      .querySelector("c-contributions-graph")
      .callApexForContributions(this.userName, this.selectedYear);
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
