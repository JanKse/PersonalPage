import contentful, { Asset } from "contentful";
import type { Document } from "@contentful/rich-text-types";


export interface Timeline {
  title: string;
  years: string;
  description: string;
  isCurrent: boolean;
  type: string;
}

export interface SocialMedia {
  url: string;
  srLabel: string;
  type: string;
}

export interface LandingPage {
  greetingsTitle: string;
  bio1title: string;
  bio2title: string;
  iAmList: [string];
  skillsTitle: string;
  skillsSubtitle1: string;
  skillsSubtitle2: string;
  automationSkillList: [string];
  itSkillList: [string];
  timelineTitle: string;
  timeline1subtitle: string;
  timeline2subtitle: string;
  resumeTitle: string;
  contactTitle: string;
  email: string;
  skTelNumber: string;
  czTelNumber: string;
  skAddress: string;
  czAddress: string;
  footerContent: Document;
  resume: Asset;

}


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});