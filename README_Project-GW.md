# Project-GW: Global Warming

Climate change.  Global warming.  You hear those phrases together often, but climate change includes a variety of criteria and global warming is referring to the earth's temperature (getting hotter).  Some people say climate change is real, and global warming or the earth's temperature warming is man-made and the cause of extreme weather events.  Others contend that higher temperatures are a natural process, extreme weather events are normal, and while mankind's activities does put greenhouse gases in the air they aren't the cause of the earth's higher temperatures.  This disagreement won't be settled by this project, but we hope to shed some light on the subject.



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


- CDIAC (Carbon Dioxide Information Analysis Center):
  - [co2 Data Set](http://cdiac.ess-dive.lbl.gov/trends/emis/tre_coun.html)
  - **Authors:** Tom Boden and Bob Andres (Oak Ridge National Laboratory); Gregg Marland (Appalachian State University) DOI: 10.3334/CDIAC/00001_V2017

**Data Cleansing**

- Excel was was used to sort, filter, count, and view the data sets.  Excel allows you to group segments of the data for comparisons, and it is easy to sum, convert, manipulate the data prior to creating csv files.
- Pandas was also used to inspect and clean the data, drop NaN values, convert data types, rename columns, do preliminary charting like line, scatter, box, or histograms, correlation matrices, and merging data sets.

**Data Learning**

- Read data file into data frame, parse dates, read in as strings with dtype=object and convert to proper data types, and inspect it.

  df = pd.read_csv(myData, dtype=object)

  df.info()

  df.head(10) 

  df.describe()

   - Create a scatter matrix using df.corr() to test correlation.

   - Create some plots to learn 

     - df['col1'].plot(kind='box')
     - df['col1'].plot(kind='hist')
     - df['col1'].plot(kind='line')

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
  - 1st Hawaii API.
  - 2nd Weather Visualization.
  - 3rd D3 Charting.
- Local and Heroku PostgreSQL.
- HTML, CSS, JavaScript, Bootstrap.
- Matplotlib, Seaborn, D3.