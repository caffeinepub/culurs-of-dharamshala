import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Storage "blob-storage/Storage";

import MixinStorage "blob-storage/Mixin";


actor {
  include MixinStorage();

  type ReligiousPractice = {
    id : Nat;
    name : Text;
    description : Text;
    ritualType : Text;
    image : Storage.ExternalBlob;
    associatedDeity : Text;
    tradition : Text;
  };

  var nextPracticeId = 29;

  let religiousPractices = Map.empty<Nat, ReligiousPractice>();

  public query ({ caller }) func getPracticeById(id : Nat) : async ?ReligiousPractice {
    religiousPractices.get(id);
  };

  public query ({ caller }) func getAllPractices() : async [ReligiousPractice] {
    religiousPractices.values().toArray();
  };

  public query ({ caller }) func getPracticesByRitualType(ritualType : Text) : async [ReligiousPractice] {
    let iter = religiousPractices.values().filter(
      func(practice) {
        practice.ritualType == ritualType;
      }
    );
    iter.toArray();
  };

  public query ({ caller }) func getPracticesByTradition(tradition : Text) : async [ReligiousPractice] {
    let iter = religiousPractices.values().filter(
      func(practice) {
        practice.tradition == tradition;
      }
    );
    iter.toArray();
  };

  public query ({ caller }) func getPracticesByDeity(deity : Text) : async [ReligiousPractice] {
    let iter = religiousPractices.values().filter(
      func(practice) {
        practice.associatedDeity == deity;
      }
    );
    iter.toArray();
  };

  public shared ({ caller }) func addPractice(
    name : Text,
    description : Text,
    ritualType : Text,
    image : Storage.ExternalBlob,
    associatedDeity : Text,
    tradition : Text,
  ) : async () {
    let newPractice : ReligiousPractice = {
      id = nextPracticeId;
      name;
      description;
      ritualType;
      image;
      associatedDeity;
      tradition;
    };

    religiousPractices.add(nextPracticeId, newPractice);
    nextPracticeId += 1;
  };
};
