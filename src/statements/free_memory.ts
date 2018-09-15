import {Statement} from "./statement";
import {verNot, str, seq, IRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../version";

export class FreeMemory extends Statement {

  public static get_matcher(): IRunnable {
    let ret = seq(str("FREE MEMORY ID"), new Source());

    return verNot(Version.Cloud, ret);
  }

}