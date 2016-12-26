import {Statement} from "./statement";
import * as Combi from "../combi";
import * as Reuse from "./reuse";

let str = Combi.str;
let seq = Combi.seq;

export class LogPoint extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let ret = seq(str("LOG-POINT ID"),
                  new Reuse.Source(),
                  str("SUBKEY"),
                  new Reuse.Source());

    return ret;
  }

}