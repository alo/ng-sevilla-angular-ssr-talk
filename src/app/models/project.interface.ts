import { Link } from './link.interface';

export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  socialLinks?: Link[];
}
