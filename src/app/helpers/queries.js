import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
	query GetQuestions {
		questions {
			id
			question
			points
			answers {
				answer
				id
			}
		}
	}
`;
