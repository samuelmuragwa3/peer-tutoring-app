namespace PeerTutoringApp.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // Foreign key
        public int SessionId { get; set; }

        // Navigation property back to the parent Session
        public Session Session { get; set; } = null!;
    }
}