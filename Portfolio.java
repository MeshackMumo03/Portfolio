public class Portfolio {
    private String name;
    private String email;

    public Portfolio(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void displayInfo() {
        System.out.println("Name: " + this.name);
        System.out.println("Email: " + this.email);
    }

    public static void main(String[] args) {
        Portfolio portfolio = new Portfolio("Meshack Mumo", "meshackmumo04@gmail.com");
        portfolio.displayInfo();
    }
}