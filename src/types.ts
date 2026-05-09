export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Experience {
  company: string;
  location: string;
  designation: string;
  start_date: string;
  end_date: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface CustomPage {
  id: string;
  title: string;
  content: string; // Markdown or HTML
}

export interface PortfolioData {
  personal_information: PersonalInfo;
  summary: string;
  skills: string[];
  professional_experience: Experience[];
  education: Education[];
  custom_pages?: CustomPage[];
}
