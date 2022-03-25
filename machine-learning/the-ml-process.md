# The ML process



1. So ML involves a number of steps, the first step is to import our data which often comes in the form of a .csv file, or better known as **dataset**.
2. Next, we need th **clean** the data. And this involves tasks such as duplicated data, irrelevant, incomplete or noisy data.
3. Once data is clean, we need to split the data into two segments: **training** and **test sets** to make sure that our model produces the right result. For example if you have the collection of the 380 Bach chorals we can reserve 300 for training and 80 for testing (80-20%).
4. The next step is to **create a model** and this involves selecting an algorithm to analyse the data. There are so many machine learnings algorithms out there, such as decision trees, neural networks and so on. Each algorithm have pros and cons in terms of accuracy and performance so the algorithm you use, depends on the kind of problem you’re trying to solve and your input data.
5. Next we need to **train the model**. So we feed it our training data. On this step our model will then look for the patterns in the data, so next we can ask it to make predictions. Coming back to our motet recognition exanple, giving a header of few pitches (a partial theme of a exposition), our model can predict potential continuities based on its train. Of course, this prediction is not always accurate.
6. This measurement of the prediction is the **evaluation and improvement** stage, and in many algorythms you will find a measure of this accuracy called _**temperature**._

The good news is that on the actual development of machine learning we have to do very little from scratch.

Next we’ll look at the libraries and tools for machine learning.

#### Numpy

multidimensional array.

#### Pandas

data analysis framework that provides a concept called data-frame. Data frame is a two dimensional data structure similar to an excel spreadsheet. So we have rows and columns.

#### MadPlotLib

Is a two dimensional plotting library for creating graphs on plots

#### Scikit-Learn

Provides the most well known algorythms.

So you may wondering again what we are talking about ML in a WebAudio course. Well, the exponential development of ML on the last ten years happened thanks to two key twchnologies, jupyter and more recently google colab. To deal with tables, and big quantities of data in laptop computers, even the more powerfull , its really painfull. So these two technologies allowed to programmers to have borrowed remote servers with T1 and more powerfull CPUS and specially GPU based computers.

### Datasets

So now we enter into the art of datasets. Be aware that datasets are something that we can create by our own. In this moment I will mention another type of emerging art, or discipline known as digital life, that deals with the arts and tools to think about the self-control mind flux into the digital era. This subject is too big to even mention some few components today, but I will point out only one thing. Even in gamified life organisation, sync calendars and collaboratives repositories, everything in data can be resumed into a .txt , .json or .md file. And these files, if they are well organised, can become a personal dataset.
