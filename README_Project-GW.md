# Project-GW: Global Warming

What is the difference between climate and weather?  One definition of climate is the composite or generally prevailing weather conditions of a region, as temperature, air pressure, humidity, precipitation, sunshine, cloudiness, and winds, throughout the year and averaged over a series of years, and the definition of weather is the state of the atmosphere with respect to wind, temperature, cloudiness, moisture, and pressure.  From these definitions, climate and weather share similar words, terminology, and cover the same topic, but for our global warming project, climate will be used in the context of time, years or longer whereas weather is more short term like a day, a week or a season.  This is a traditional and important distinction in the discussion of climate change and global warming.  For instance, Senator Jim Inhofe's "Snowball on the Senate floor" speech.  His speech was meant to deny climate change by linking the very cold weather that year and the fact that he pulled a snowball out of a plastic bag in February of 2014.  However, the speech was widely regarded as not credible, unscientific, and a joke on and off the floor of the Senate.  Snow is precipitation that freezes into ice crystals as it falls to the ground and is an example of weather which is generally a short term or seasonal event, and the senator's speech was an example of the challenge of discussing these controversial, difficult to understand, and quantify topics with someone you would assume has a good grasp of the facts and science; however, hopefully having some definitions will help us keep the discussion reasonable, and fact-based.  The Climate Change ~ Global Warming disagreement won't be settled by this project, but we hope to shed some light on the subject.  Below are some details on the work involved behind the visualizations.



## The Story...about the Story

### Environment 

Sign up for Heroku account at https://signup.heroku.com/dc

Existing local PostgreSQL and Heroku PostgreSQL as a Heroku addon.

**Google drive folder for shared files:**

<https://drive.google.com/drive/folders/1tWA_FSdIOMZsGmPn8la2-q3KLqRIXD_k>

**Local, GitHub and Heroku Repositories:**

https://github.com/chrisg4github/Project-GW.git

https://git.heroku.com/project-gw.git

<u>To deploy your app to Heroku</u>,  use the git add, commit, push commands to push the code from your local repository to your GitHub repository and then to the Heroku repository.

$ git add .

$ git commit-m "Move new files to GitHub"

$ git push -u origin master

 **Then push the files to Heroku master:**

$ git push heroku master



## Data

**Data Search**

- Data.World: <https://data.world/data-society/global-climate-change-data>
  - Original Data Sources sited by Data.World:

     [Kaggle](https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data)

     [Raw Data: BerkeleyEarth](http://berkeleyearth.org/data/)


- CDIAC (Carbon Dioxide Information Analysis Center part of DOE):
  - [co2 Data Set](http://cdiac.ess-dive.lbl.gov/trends/emis/tre_coun.html)
  - **Authors:** Tom Boden and Bob Andres (Oak Ridge National Laboratory); Gregg Marland (Appalachian State University) DOI: 10.3334/CDIAC/00001_V2017

**Data Cleansing**

- Excel was was used to sort, filter, count, and view the data sets.  Excel allows you to group segments of the data for comparisons, and it is easy to sum, convert, manipulate the data prior to creating csv files.
- Pandas was also used to inspect and clean the data, drop NaN values, convert data types, rename columns, do preliminary charting like line, scatter, box, or histograms, correlation matrices, and merging data sets.

**Data Learning**

- Read data file into data frame, parse dates, read in as strings with dtype=object and convert to proper data types, and inspect.

  df = pd.read_csv(myData, dtype=object)

  df.info()

  df.head(10) 

  df.describe()

   - Create a scatter matrix using df.corr() to view the correlation between variables.

   - Create some plots to learn distribution, min, max, average, structure, periodicity and other useful information about the data.

     - df['col1'].plot(kind='box')
     - df['col1'].plot(kind='hist')
     - df['col1'].plot(kind='line')

- Jupyter Notebooks with notes and all charts:

  - GW_Data_Cleaning.ipynb
  - GW_Plot_Global-Temps.ipynb
  - GW_Plot_Yearly-Avg_Temps.ipynb
  - GW_Plot_Land_Temps_by_Country.ipynb
  - GW_Corr_Yearly_Tmp_co2.ipynb
  - GW-co2-clean.ipynb
  - GW-corr-plots.ipynb

- Information on Lag plots, Correlation, and Visualization.
  -  [Lag_plot explanation](http://www.itl.nist.gov/div898/handbook/eda/section3/lagplot.htm)
  -  [Introduction to Correlation](https://www.datascience.com/blog/introduction-to-correlation-learn-data-science-tutorials)
  -  [Visualization Examples](https://pandas.pydata.org/pandas-docs/stable/visualization.html)


- Create a list of hypothesis/questions to answer about the data.
  - Is Climate change is real?
  - Temperature and co2 are components of Climate Change, so is there a correlation  and causation relationship between co2 increase and temperature increase?  
- Presentation of the data to tell a story.
  - Create a web application on Heroku to display charts, links to other information, videos, D3.




## Tools:

- Google drive, and Heroku and GitHub repositories.
- Excel, Pandas, Numpy, other Python libraries.
- Heroku - Host an application:
  - 1st test app - Hawaii API.
  - 2nd test app - Weather Visualization.
  - 3rd test app - D3 Charting.
  - 4th production app - Global Warming Visualization
  - README_heroku.md (general heroku app create instructions)
  - HerokuInstallNotes.docx (Windows specific information)
- Local and Heroku PostgreSQL (create database objects in all lower case).
  - gw_sequences.ddl
  - gw_tables.ddl
  - gw_table_counts.sql
  - gw_export_import_cmds.txt
- HTML, CSS, JavaScript, Bootstrap, Strapdown (for readme.md files).
- Matplotlib, Seaborn, D3.




## Additional Sources:

- Climate Change Is Complex. We’ve Got Answers to Your Questions.  JUSTIN GILLIS  Illustrations by JON HAN;  https://www.nytimes.com/interactive/2017/climate/what-is-climate-change.html
- "Google search engine" which was used numerous times to find so many answers and avenues of research and insight.
- Global Warming Concern at Three-Decade High in U.S.;  Lydia Saad.
  http://news.gallup.com/poll/206030/global-warming-concern-three-decade-high.aspx


