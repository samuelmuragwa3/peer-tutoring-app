namespace PeerTutoringApp.Models
{
    public class Session
    {
        public int Id { get; set; }
        public string Course { get; set; } = string.Empty;
        public string Day { get; set; } = string.Empty;
        public string Time { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Tutor { get; set; } = string.Empty;
        public int Capacity { get; set; }

        // Navigation property — this isn't a real DB column,
        // it's how EF Core lets you access related Participants in code
        public ICollection<Participant> Participants { get; set; } = new List<Participant>();
    }
}