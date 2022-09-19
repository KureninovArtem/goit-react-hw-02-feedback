import { nanoid } from "nanoid"
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
	return (
		<>
			{options.map((option) => (
				<button key={nanoid()} type="button" className={style.button} name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};