const userProfile = {

  firstName: "Samantha",
  middleNames: "",
  lastName: "Brooks",
  accountNumber: 12345678,
  sortCode: "553456",
  IBAN: "GB56HLFX11005310847777",
  cards: [
    {
      type: "VISA DEBIT",
      accountType: "Current Account",
      cardNumber: 4024007177637419,
      amount: 3751.59,
      currencyType: "GBP",
      currencySymbol: "£"
    },
    {
      type: "MASTERCARD CREDIT",
      accountType: "Silver Credit Account",
      cardNumber: 5560433593514577,
      amount: -289.23
    }
  ],
  holdings: {
    GBP: 3751.59,
    USD: 1000.00,
    EUR: 43.29
  }
}

export default userProfile;