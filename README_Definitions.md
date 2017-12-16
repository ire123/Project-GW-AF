## Definitions:

**Effect size** - is a simple way of quantifying the difference between two groups that has many advantages over the use of tests of statistical significance alone. Effect size emphasizes the size of the difference rather than confounding this with sample size. (most important)

**Confidence interval** - a range of values so defined that there is a specified probability that the value of a parameter lies within it. (next in importance)

p value - The p-value is the level of marginal significance within a statistical hypothesis test representing the probability of the occurrence of a given event. The p-value is used as an alternative to rejection points to provide the smallest level of significance at which the null hypothesis would be rejected. (distant third in importance)

**Standard Deviation** - The Standard Deviation is a measure of how spread out numbers are. Its symbol is σ (the greek letter sigma). The formula is easy: it is the square root of the Variance.

**Variance** - The Variance is defined as: The average of the squared differences from the Mean.

**Standard Deviation/Variance Example:** You and your friends have just measured the heights of your dogs (in millimeters):

The heights (at the shoulders) are: 600mm, 470mm, 170mm, 430mm and 300mm. Find out the Mean, the Variance, and the Standard Deviation. Your first step is to find the Mean: Answer: Mean = 600 + 470 + 170 + 430 + 3005 = 19705 = 394 so the mean (average) height is 394 mm.

Now we calculate each dog's difference from the Mean: To calculate the Variance, take each difference, square it, and then average the result: variance calc: ((206 2) + (76 2) + (-224 2) + (36 2) + (-94 **2))/ 5 (number of dogs) So the Variance is 21,704

And the Standard Deviation is just the square root of Variance, so: Standard Deviation

σ = √21,704 = 147.32... = 147 (to the nearest mm)



**Cohen's effect size**

There is one other common way to express the difference between distributions. Cohen's ***d*** is the difference in means, standardized by dividing by the standard deviation. Here's the math notation:

![cohens_effect_size_math_notation](C:\Users\Chrisg\BootCampClasswork\Project-GW\cohens_effect_size_math_notation.png)

Cohen's ***d*** has a few nice properties:

1. Because mean and standard deviation have the same units, their ratio is dimensionless, so we can compare ***d*** across different studies.
2. In fields that commonly use d, people are calibrated to know what values should be considered big, surprising, or important.
3. Given ***d*** (and the assumption that the distributions are normal), you can compute overlap, superiority, and related statistics.

In summary, the best way to report effect size depends on the audience and your goals. There is often a trade off between summary statistics that have good technical properties and statistics that are meaningful to a general audience.



**Lag plot** is a special type of scatter plot with the two variables (X,Y) “lagged.”

Lag plots allow you to check for:

1. **Model suitability**.  The shape of the lag plot can provide clues about the underlying structure of your data. For example:
   - A **linear shape** to the plot suggests that an [autoregressive model](http://www.statisticshowto.com/autoregressive-model/) is probably a better choice.
   - An **elliptical plot **suggests that the data comes from a single-cycle [sinusoidal model](https://en.wikipedia.org/wiki/Sinusoidal_model).
2. **Outliers** (data points with extremely high or low values), and Randomness (data without a pattern).
3. **Autocorrelation** -   If your data shows a linear pattern, it suggests autocorrelation is present. A positive linear trend (i.e. going upwards from left to right) is suggestive of positive autocorrelation; a negative linear trend (going downwards from left to right) is suggestive of negative autocorrelation. The tighter the data is clustered around the diagonal, the more autocorrelation is present; perfectly autocorrelated data will cluster in a single diagonal line.
4. **Seasonality** (periodic fluctuations in time series data that happens at regular periods).  Data can be checked for seasonality by plotting observations for a greater number of periods (lags). Data with seasonality will repeat itself periodically in a sine or cosine-like wave.


How many data scientists does it take to change a light bulb? Answer: 101. A hundred to build a scalable middleware infrastructure for managing multiple applications, fitting types, light bulb technologies and different wattages, and to build a schema or ontology to identify the relationships between these. One to change the light bulb.

Q: How many data analysts does it take to change a light bulb? A: It depends what approach they use…
https://orcinternational.com.au/market-research/q-how-many-data-analysts-does-it-take-to-change-a-light-bulb-a-it-depends-what-approach-they-use/

“Climate change is like my head: it’s not visible in every instance, but I’m pretty darn sure it’s there.” 
― Narcissismus Decimus Maximus