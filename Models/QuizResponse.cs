public class QuizResponse
{
    public string questionOne;
    public string questionTwo;
    public string questionThree;
    public string questionFour;
    public string questionFive;
    public string questionSix;
    public string questionSeven;
    public string questionEight;
    public string questionNine;
    public string questionTen;
    public string age;
    public string gender;
    public string jaundice;
    public string familyASD;


    public string Concatenate()
    {
        string response;
        string[] list = new string[] { questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen };

        response = string.Join(",", list);
        response += "," + age + "," + gender + "," + jaundice + "," + familyASD;

        return response;
    }
}