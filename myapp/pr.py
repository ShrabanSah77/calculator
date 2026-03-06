import numpy as np
import pandas as pd
from ISLP import load_data
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.decomposition import PCA
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score

college = load_data("College")

y = college["Apps"]
X = college.drop(columns=["Apps"])

mse_scores = []

for M in range(1,19):
    pipe = Pipeline([
        ('scale', StandardScaler()),
        ('pca', PCA(n_components=M)),
        ('lm', LinearRegression())
    ])
    
    scores = cross_val_score(pipe, X, y,
                             cv=10,
                             scoring='neg_mean_squared_error')
    
    mse = -scores.mean()
    mse_scores.append(mse)

best_M = np.argmin(mse_scores) + 1
best_error = min(mse_scores)

print(best_M, best_error)
