import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Project = {
    title : Text;
    description : Text;
    link : Text;
  };

  module Project {
    public func compare(project1 : Project, project2 : Project) : Order.Order {
      Text.compare(project1.title, project2.title);
    };
  };

  type Resume = {
    name : Text;
    url : Text;
  };

  let projects = Map.empty<Text, Project>();
  let resumes = Map.empty<Text, Resume>();

  public shared ({ caller }) func addProject(title : Text, description : Text, link : Text) : async () {
    let project : Project = {
      title;
      description;
      link;
    };
    projects.add(title, project);
  };

  public shared ({ caller }) func addResume(name : Text, url : Text) : async () {
    let resume : Resume = {
      name;
      url;
    };
    resumes.add(name, resume);
  };

  public query ({ caller }) func getProject(title : Text) : async ?Project {
    projects.get(title);
  };

  public query ({ caller }) func getResume(name : Text) : async ?Resume {
    resumes.get(name);
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray();
  };
};
