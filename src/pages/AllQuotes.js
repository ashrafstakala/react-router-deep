import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ash', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Ashraf', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
