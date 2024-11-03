import TokenOffering from '../../components/TokenOffering';

interface TokenPageProps {
    params: {
      id: string;
    };
}

const TokenPage: React.FC<TokenPageProps> = ({ params }) => {
    return <TokenOffering id={params.id} />;
};

export default TokenPage;
