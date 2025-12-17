import BankDetails from "./_components/bank-details";
import Confirmation from "./_components/confirmation";
import PersonalDetails from "./_components/personal-details";
import SendCrypto from "./_components/send-crypto";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const params = await searchParams;
  const { page } = params;

  return (
    <div className="max-w-300 mx-auto py-12 px-4 min-h-screen">
      {page === "bank-details" ? (
        <BankDetails />
      ) : page === "personal-details" ? (
        <PersonalDetails />
      ) : page === "send-crypto" ? (
        <SendCrypto />
      ) : (
        <Confirmation />
      )}
    </div>
  );
};

export default page;
