public class types {
  public class GitHubUser {
    public String name;
    public String GitHubUsername;
    public String avatarUrl;
    public ContributionsCollection contributionsCollection;
  }

  public class ContributionsCollection {
    public List<Integer> years;
    public ContributionCalendar contributionCalendar;
    public ContributionsCollection() {
    }
  }

  public class GitHubApiJson {
    public ContributionBasic data;
    public String message;
    public List<Error> errors;
    public GitHubApiJson() {
    }
  }

  public class Error {
    public String type;
    public String message;
    public Error() {
    }
  }

  public class ContributionBasic {
    public User user;
    public ContributionBasic() {
    }
  }

  public class User {
    public ContributionsCollection contributionsCollection;
    public String name;
    public String login;
    public String avatarUrl;
    public User() {
    }
  }

  public class ContributionCalendar {
    public Integer total;
    public List<ContributionDays> weeks;
    public ContributionCalendar() {
    }
  }

  public class ContributionDays {
    public List<ContributionDay> days;
    public ContributionDays() {
    }
  }

  public class ContributionDay {
    public Integer count;
    public String datex;
    public String level;
    public Integer weekday;
    public ContributionDay() {
    }
  }
}
