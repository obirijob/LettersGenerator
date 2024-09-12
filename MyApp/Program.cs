// See https://aka.ms/new-console-template for more information

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(NumberToLetters(999999999));
    }

    static string NumberToLetters(int number)
    {
        string letters = "";

        string nums = "abcdefghijklmnopqrstuvwxyz";

        while (number > 0)
        {
            int remainder = (number - 1) % nums.Count();
            letters = nums[remainder] + letters;
            number = (number - 1) / nums.Count();
        }

        var x = new List<string>();

        for (int i = 0; i < letters.Length; i++)
        {
            if (i % 4 == 0 && i != 0)
            {
                x.Add($"-{letters[i].ToString()}");
            }
            else
            {
                x.Add(letters[i].ToString());
            }
        }

        return string.Join("", x).ToUpper();
    }
}