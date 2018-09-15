import {Statement} from "./statement";
import {verNot, str, IRunnable} from "../combi";
import {Version} from "../version";

export class LoadOfProgram extends Statement {

  public static get_matcher(): IRunnable {
    let ret = str("LOAD-OF-PROGRAM");

    return verNot(Version.Cloud, ret);
  }

  public isStructure() {
    return true;
  }

  public isValidParent(s) {
    return s === undefined;
  }

  public indentationSetStart() {
    return 0;
  }

  public indentationSetEnd() {
    return 2;
  }

}