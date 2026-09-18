import pandas as pd
import numpy as np

np.random.seed(42)

n = 5000

df = pd.DataFrame({
    "coding_consistency": np.random.randint(20, 101, n),
    "assessment_score": np.random.randint(25, 101, n),
    "project_quality": np.random.randint(25, 101, n),
    "github_authenticity": np.random.randint(30, 101, n),
    "defense_score": np.random.randint(20, 101, n),
    "projects_completed": np.random.randint(0, 7, n),
})

# Weighted trust score used only to create training labels
df["trust_score"] = (
    df["coding_consistency"] * 0.20 +
    df["assessment_score"] * 0.20 +
    df["project_quality"] * 0.20 +
    df["github_authenticity"] * 0.15 +
    df["defense_score"] * 0.20 +
    (df["projects_completed"] / 6) * 100 * 0.05
)

# Verification label
df["verified"] = (df["trust_score"] >= 65).astype(int)

# Remove intermediate score from training data
df = df.drop(columns=["trust_score"])

df.to_csv("ai_model/data/candidate_dataset.csv", index=False)

print("Dataset created successfully!")
print(f"Records: {len(df)}")
print(f"Verified: {df['verified'].sum()}")
print(f"Not Verified: {(df['verified'] == 0).sum()}")
print("\nFirst 5 records:")
print(df.head())
