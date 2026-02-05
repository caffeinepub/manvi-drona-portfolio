import Map "mo:core/Map";

module {
  // Old types
  type OldProject = {
    title : Text;
    description : Text;
    link : Text;
  };

  type OldResume = {
    name : Text;
    url : Text;
  };

  type OldActor = {
    projects : Map.Map<Text, OldProject>;
    resumes : Map.Map<Text, OldResume>;
  };

  // New types
  type UploadedFile = {
    name : Text;
    url : Text;
    description : Text;
  };

  type NewActor = {
    uploadedFiles : Map.Map<Text, UploadedFile>;
    uploadedCVs : Map.Map<Text, Text>;
  };

  // Migration function
  public func run(old : OldActor) : NewActor {
    let uploadedFiles = old.projects.map<Text, OldProject, UploadedFile>(
      func(_, oldProject) {
        {
          name = oldProject.title;
          url = oldProject.link;
          description = oldProject.description;
        };
      }
    );

    let uploadedCVs = old.resumes.map(
      func(_, oldResume) {
        oldResume.url;
      }
    );

    { uploadedFiles; uploadedCVs };
  };
};
