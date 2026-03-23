import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showHeroContact = false;

  readonly profile = {
    name: 'Manoj Kumar Donthurala',
    headline: 'System/Data Engineer | Data Engineering and Cloud Enthusiast',
    email: 'donturalamanoj321@gmail.com',
    phone: '+91 7095854896',
    phoneDial: '+917095854896',
    linkedinLabel: 'Manoj Kumar Donthurala',
    linkedinUrl: 'https://www.linkedin.com/in/manojkumardonthurala/'
  };

  readonly skills = [
    'Python (including PySpark, Pandas)',
    'SQL',
    'Amazon Redshift',
    'MySQL',
    'AWS Athena',
    'AWS Glue (ETL Jobs & Studio)',
    'AWS CloudWatch',
    'AWS Lambda',
    'AWS Step Functions',
    'Jupyter Notebook',
    'Seaborn',
    'Matplotlib',
    'AWS S3',
    'AWS EMR',
    'AWS IAM',
    'AWS CloudFormation (basic)',
    'scikit-learn',
    'Data Engineering and ETL Automation'
  ];

  readonly skillGroups = [
    {
      title: 'Languages and Processing',
      items: ['Python', 'PySpark', 'Pandas', 'SQL']
    },
    {
      title: 'AWS Data Stack',
      items: ['S3', 'Glue', 'EMR', 'Redshift', 'Athena', 'Lambda', 'CloudWatch']
    },
    {
      title: 'Analytics and ML',
      items: ['scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
    }
  ];

  readonly experience = [
    'Designed and implemented scalable, automated ETL pipelines using EMR, S3, Glue, Lambda, and Redshift for daily batch and near real-time processing.',
    'Developed and maintained AWS Glue ETL jobs to clean, transform, and curate over 1TB of structured and semi-structured data daily.',
    'Scheduled and orchestrated complex workflows using AWS Glue Workflows with Spark/Hadoop processing on EMR clusters.',
    'Catalogued datasets with AWS Glue Crawlers for seamless data discovery and downstream analytics integration.',
    'Monitored pipelines and cluster performance with AWS CloudWatch and improved data availability by resolving failures proactively.',
    'Collaborated with cross-functional teams to automate business reporting pipelines.'
  ];

  readonly certifications = [
    'AWS Cloud Practitioner',
    'AWS Solution Architect'
  ];

  readonly achievements = [
    'Successfully automated end-to-end ETL lifecycle for high-volume retail transaction data.',
    'Awarded Richard E. Merwin Student Scholarship (2022) by IEEE Computer Society.',
    'Awarded Best Article for "Computer Vision and Intelligence in Agriculture," published in IEEE Compute 8, IEEE Computer Society India Newsletter 2020.'
  ];

  readonly highlights = [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Data Processed', value: '1TB+/Day' },
    { label: 'Certifications', value: '2 AWS' },
    { label: 'Focus', value: 'Data Engineering' }
  ];

  readonly coreDomains = [
    'ETL and Data Transformation',
    'Cloud Engineering on AWS',
    'Big Data Processing',
    'Pipeline Automation',
    'Data Analytics and Reporting'
  ];

  readonly professionalSummary =
    'Data Engineer with 3+ years of hands-on experience building reliable AWS-based ETL pipelines for large-scale data processing. Strong interest in Data Engineering, Cloud Engineering, ETL transformation, analytics, and automation of data workflows to enable faster and more accurate business insights.';

  readonly currentYear = new Date().getFullYear();
  readonly gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.profile.email)}`;

  toggleHeroContact(): void {
    this.showHeroContact = !this.showHeroContact;
  }
}
