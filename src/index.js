import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const SKILLS = [
  { type: 'JavaScript (ES5/6/7)', level: 95 },
  { type: 'React/Redux', level: 92 },
  { type: 'CSS3', level: 90 },
  { type: 'HTML5', level: 88 },
  { type: 'Git', level: 80 },
  { type: 'GraphQL', level: 75 },
  { type: 'Jest', level: 70 },
  { type: 'Webpack', level: 65 },
  { type: 'React Native', level: 60 },
  { type: 'AWS', level: 50 },
  { type: 'Node.js', level: 45 },
  { type: 'Elasticsearch', level: 40 },
  { type: 'D3', level: 37 },
  { type: 'Docker', level: 35 }
];

class SkillBars extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 100);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
        <h1>Skills Matrix (October 2018)</h1>
        <p>
          Made with <strong>React</strong> and deployed via{' '}
          <strong>Github Pages</strong>
        </p>
        <hr />
        <ul className="skills">
          {skills.map((skill, index) => (
            <li
              key={skill.type}
              style={{
                width: `${skill.level}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${100 /
                  (index + 3.5)}%)`
              }}
            >
              <p>
                {skill.type}
                <span>{skill.level}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <SkillBars hue="194" saturation="100" skills={SKILLS} />,
  document.getElementById('root')
);
