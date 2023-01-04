import { FunctionComponent } from "react";

interface PrivacyPolicyPageProps {}

const PrivacyPolicyPage: FunctionComponent<PrivacyPolicyPageProps> = () => {
  return <iframe title="privacy-policy" src="/pages/privacy-policy.html" className="fixed left-0 top-0 w-full h-full"></iframe>;
};

export default PrivacyPolicyPage;
