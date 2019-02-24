import {statementType} from "../_utils";
import * as Statements from "../../../src/abap/statements/";

const tests = [
  "OPEN DATASET lv_file_name FOR OUTPUT IN BINARY MODE.",
  "OPEN DATASET lv_element FOR INPUT IN TEXT MODE ENCODING DEFAULT.",
  "OPEN DATASET file FOR INPUT IN BINARY MODE.",
  "OPEN DATASET file FOR INPUT IN BINARY MODE AT POSITION foo-pos.",
  "open dataset file for input in text mode at position lv_pos encoding default.",
  "OPEN DATASET file FOR INPUT IN TEXT MODE ENCODING UTF-8 MESSAGE msg IGNORING CONVERSION ERRORS.",
  "OPEN DATASET file FOR OUTPUT IN LEGACY TEXT MODE.",
  "OPEN DATASET file FOR OUTPUT IN LEGACY BINARY MODE.",
  "OPEN DATASET file FOR INPUT IN TEXT MODE ENCODING UTF-8 SKIPPING BYTE-ORDER MARK.",
  "OPEN DATASET file FOR INPUT AT POSITION lv_pos IN BINARY MODE.",
  "OPEN DATASET me->mv_file FOR INPUT IN BINARY MODE MESSAGE lv_msg.",
  "OPEN DATASET file IN TEXT MODE FOR INPUT ENCODING DEFAULT.",
  "OPEN DATASET file FOR APPENDING IN TEXT MODE ENCODING DEFAULT.",
  "OPEN DATASET file FOR OUTPUT IN LEGACY BINARY MODE CODE PAGE codepage.",
  "OPEN DATASET file TYPE 'NT' FOR OUTPUT IN TEXT MODE ENCODING DEFAULT.",
  "OPEN DATASET l_file IN TEXT MODE ENCODING DEFAULT FOR INPUT WITH SMART LINEFEED MESSAGE l_msg.",
  "OPEN DATASET file FOR OUTPUT IN TEXT MODE ENCODING UTF-8 WITH BYTE-ORDER MARK\n" +
  "  IGNORING CONVERSION ERRORS.",
  "OPEN DATASET file FOR OUTPUT IN TEXT MODE ENCODING DEFAULT\n" +
  "  IGNORING CONVERSION ERRORS\n" +
  "  REPLACEMENT CHARACTER c_non_unicode.",
  "OPEN DATASET file FOR OUTPUT IN TEXT MODE ENCODING UTF-8 WITH WINDOWS LINEFEED.",
  "OPEN DATASET iv_path FOR INPUT IN TEXT MODE ENCODING DEFAULT WITH NATIVE LINEFEED\n" +
  "  AT POSITION iv_position MESSAGE lv_message IGNORING CONVERSION ERRORS.",
  "OPEN DATASET iv_path FOR INPUT IN TEXT MODE ENCODING DEFAULT IGNORING CONVERSION ERRORS.",
  "OPEN DATASET iv_path FOR INPUT IN TEXT MODE ENCODING DEFAULT WITH UNIX LINEFEED\n" +
  "  AT POSITION iv_position MESSAGE lv_message IGNORING CONVERSION ERRORS.",
  "OPEN DATASET iv_path FOR UPDATE IN TEXT MODE ENCODING DEFAULT WITH NATIVE LINEFEED\n" +
  "  AT POSITION iv_position MESSAGE lv_message IGNORING CONVERSION ERRORS.",
  "OPEN DATASET iv_path FOR UPDATE IN TEXT MODE ENCODING NON-UNICODE WITH SMART LINEFEED\n" +
  "  AT POSITION iv_position MESSAGE lv_message IGNORING CONVERSION ERRORS.",
];

statementType(tests, "OPEN", Statements.OpenDataset);