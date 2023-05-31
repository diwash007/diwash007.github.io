import { BioType } from "./BioType";
import { LinkType } from "./LinkType";

export interface PersonalInfoType {
  name: string;
  role: string;
  email: string;
  about: string;
  socials: LinkType[];
  bios: BioType[];
}
