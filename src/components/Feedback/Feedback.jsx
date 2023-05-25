import React from 'react';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    return (
      <div>
        <p className="Feedback__text">Please leave feedback</p>
        <div>
          <button type="button" onClick={this.goodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.neutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
export default Feedback;
