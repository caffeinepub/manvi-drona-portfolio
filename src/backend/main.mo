import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Migration "migration";

(with migration = Migration.run)
actor {
  // The uploadedFile represents a project file.
  type UploadedFile = {
    name : Text;
    url : Text;
    description : Text;
  };

  let uploadedFiles = Map.empty<Text, UploadedFile>();
  let uploadedCVs = Map.empty<Text, Text>(); // Map to store CVs with their URLs

  public shared ({ caller }) func addCV(url : Text) : async () {
    let timestamp = Time.now();
    let fileName = "cv_" # timestamp.toText();
    uploadedCVs.add(fileName, url);
  };

  public shared ({ caller }) func addFile(name : Text, url : Text, description : Text) : async () {
    let uploadedFile : UploadedFile = {
      name;
      url;
      description;
    };
    uploadedFiles.add(name, uploadedFile);
  };

  public query ({ caller }) func getAllFiles() : async [UploadedFile] {
    uploadedFiles.values().toArray();
  };

  public query ({ caller }) func getFilesCount() : async Nat {
    uploadedFiles.size();
  };
};

