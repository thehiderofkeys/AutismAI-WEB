public class QuizResponse
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


    public string Concatenate()
    {
        string response;
        string[] list = new string[] { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 };

        response = string.Join(",", list);
        response += "," + age + "," + gender + "," + jaundice + "," + familyASD;

        return response;
    }
}