public class DiagnosisResponse
{
    public string question1;
    public string question2;
    public string question3;
    public string question4;
    public string question5;
    public string question6;
    public string question7;
    public string question8;
    public string question9;
    public string question10;
    public string age;
    public string gender;
    public string jaundice;
    public string familyASD;

    public string quizId;
    public string ethnicity;
    public string ageCategory;
    public string score;
    public string user;
    public string classASD;
    public string prediction;

    public string formalDiag;
    public string diagWithASD;
    public string diagMethod;



    public string Concatenate()
    {
        string response;
        string suffix = "";

        string[] list = new string[] { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 };

        if (formalDiag == "1")
        {
            // Add id and diagnosis results
            response = quizId + ",";
            suffix = "," + diagWithASD + "," + diagMethod;
        } else
        {
            response = "";
            suffix = "";
        }

        response += string.Join(",", list);
        response += "," + age + "," + gender + ","+ ethnicity + "," + jaundice + "," + familyASD + "," + user + "," + ageCategory + "," + score + "," + classASD + "," + prediction + "," + formalDiag;
        response += suffix;
        // If formal diagnosis then add the result and method
        
  
        return response;
    }
}
