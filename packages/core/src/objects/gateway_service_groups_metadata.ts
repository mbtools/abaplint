import {AbstractObject} from "./_abstract_object";

export class GatewayServiceGroupsMetadata extends AbstractObject {

  public getType(): string {
    return "IWSG";
  }

  public getAllowedNaming() {
    return {
      maxLength: 40,
      allowNamespace: true,
    };
  }

  public getDescription(): string | undefined {
    // todo
    return undefined;
  }
}
