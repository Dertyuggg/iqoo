import pandas as pd
import joblib

MODEL_PATH = "ai_model/models/talent_trust_model.pkl"

model = joblib.load(MODEL_PATH)

print("\n===== TALENT TRUST ENGINE =====")
print("Enter candidate details (0-100 unless specified).\n")

coding = float(input("Coding Consistency: "))
assessment = float(input("Assessment Score: "))
project = float(input("Project Quality: "))
github = float(input("GitHub Authenticity: "))
defense = float(input("Project Defense Score: "))
projects = int(input("Projects Completed (0-6): "))

candidate = pd.DataFrame([{
    "coding_consistency": coding,
    "assessment_score": assessment,
    "project_quality": project,
    "github_authenticity": github,
    "defense_score": defense,
    "projects_completed": projects
}])

prediction = model.predict(candidate)[0]
probability = model.predict_proba(candidate)[0][1] * 100

print("\n========== AI RESULT ==========")
print(f"Trust Probability: {probability:.2f}%")

if prediction == 1:
    print("Decision: VERIFIED")
else:
    print("Decision: NOT VERIFIED")

print("===============================")
