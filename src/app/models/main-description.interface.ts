import { Link } from './link.interface';
import { Project } from './project.interface';
import { MetaDefinition } from '../../../node_modules/@angular/platform-browser';
import { ProfilePic } from './profile-pic.interface';

export interface MainDescription {
  name: string;
  description: string;
  position: string;
  profilePic: ProfilePic;
  socialLinks: Link[];
  projects: Project[];
  title: string;
  metas: MetaDefinition[];
}
