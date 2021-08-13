export interface KeysDTO {
  readonly username: string;
  readonly identityKeyPair: string;
  readonly deviceId: string;
  readonly preKeyId: string;
  readonly signedPreKeyId: string;
  readonly preKey: string;
  readonly registrationId: string;
}
