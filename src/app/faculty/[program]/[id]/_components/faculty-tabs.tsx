export interface IFacultyTab {
  value: string;
  label: string;
  content: React.ReactNode | string;
}

export const facultyTabs: IFacultyTab[] = [
  {
    label: 'About',
    value: 'about',
    content:
      'Arif obtained his PhD degree in Finance from the University of Western Sydney, Australia. His doctoral research work explored the information content of idiosyncratic volatility of asset returns. He joined the School of Business and Economics (SBE) at European University (EUB) in August 2015 as an Associate Professor of Finance. Prior to joining EUB, he has served fulltime faculty positions at the Universiti Brunei Darussalam and University of Rajshahi. During his doctoral study, he has also served as an adjunct faculty member at the University of Western Sydney in Australia. Over the years, he has taught a number of graduate and post-graduate level courses in the areas of finance and accounting. His research interests include asset pricing anomalies, investor and analyst behavior, empirical corporate finance, accounting information and asset prices and implication of corporate ESG issues. He has published in refereed international journals including the Review of Quantitative Finance and Accounting, Quarterly Review of Economics and Finance, North American Journal of Economics and Finance, Singapore Economic Review, Applied Financial Economics, Review of Accounting and Finance and Physica A: Statistical Mechanics and its Applications. He has also been an ad-hoc reviewer for peer reviewed journals such as the Quarterly Review of Economics and Finance, Economic Modeling, Studies in Economics and Finance, Journal of Behavioral and Experimental Finance, Singapore Economic Review   and Journal of Asia Business Studies.',
  },
  {
    label: 'Publications',
    value: 'publication',
    content: 'Publications',
  },
  {
    label: 'Research Interests',
    value: 'interests',
    content: 'Research Interests',
  },
  {
    label: 'Awards & Honors',
    value: 'awards',
    content: 'Awards & Honors',
  },
  {
    label: 'Academic Experience',
    value: 'experience',
    content: 'Academic Experience',
  },
  {
    label: 'Courses',
    value: 'courses',
    content: 'Courses',
  },
  {
    label: 'Corporate Experience',
    value: 'corporate',
    content: 'Corporate Experience',
  },
];
