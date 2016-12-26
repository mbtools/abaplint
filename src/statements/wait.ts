import {Statement} from "./statement";
import * as Combi from "../combi";
import * as Reuse from "./reuse";

let str = Combi.str;
let seq = Combi.seq;
let opt = Combi.opt;
let per = Combi.per;

export class Wait extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let up = seq(str("UP TO"), new Reuse.Source(), str("SECONDS"));
    let until = seq(str("UNTIL"), new Reuse.Cond());

    return seq(str("WAIT"), opt(per(up, until)));
  }

}