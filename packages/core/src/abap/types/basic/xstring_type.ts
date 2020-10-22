import {AbstractType} from "./_abstract_type";

export class XStringType implements AbstractType {
  public toText() {
    return "```xstring```";
  }

  public isGeneric() {
    return false;
  }

  public toABAP(): string {
    return "xstring";
  }

  public containsVoid() {
    return false;
  }
}