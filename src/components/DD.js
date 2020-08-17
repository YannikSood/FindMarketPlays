// TODO: This needs a full refactor
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ScrollingWidget from './Widgets/ScrollingWidget';
import Wallpapers from './DDItem';

class DD extends React.Component {
  constructor(props) {
    super(props);
    this.subreddit = 'WallStreetResearch';

    this.url = 'https://www.reddit.com/r/';
    this.sorts = ['hot', 'new', 'top', 'controversial', 'rising'];
  }

    state = {
      subreddit: 'WallStreetResearch',
      sort: 'new',
      files: [],
      after: null,
      before: null,
      page: 1,
    };

    componentDidMount() {
      this.setSubreddit(this.state.subreddit);
    }

    setSubreddit(sub) {
      this.setState({
        files: [],
        currentSubreddit: sub,
        page: 1,
      });

      fetch(`${this.url + sub}/${this.state.sort}.json`)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            files: data.data.children,
            after: data.data.after,
            before: data.data.before,
          });
          window.scrollTo(0, 0);
        })
        .catch(console.log);
    }


    nextPage = () => {
      fetch(`${this.url + this.state.subreddit}/${this.state.sort}.json?count=${this.state.page * 25}&after=${this.state.after}`)
        .then(res => res.json())
        .then((data) => {
          this.setState(() => ({
            files: data.data.children,
            after: data.data.after,
            before: data.data.before,
            page: this.state.page + 1,
          }));
          window.scrollTo(0, 0);
        })
        .catch(console.log);
    }

    prevPage = () => {
      fetch(`${this.url + this.state.currentSubreddit}/${this.state.sort}.json?count=${((this.state.page - 1) * 25) - 1}&before=${this.state.before}`)
        .then(res => res.json())
        .then((data) => {
          window.scrollTo(0, 0);
          const newState = {
            files: data.data.children,
            after: data.data.after,
            before: data.data.before,
          };
          if (this.state.page > 1) {
            newState.page = this.state.page - 1;
          }
          this.setState(newState);
        })
        .catch(console.log);
    }

    changeSort(sort) {
      this.setState({
        files: [],
        sort,
        page: 1,
      });
      fetch(`${this.url + this.state.subreddit}/${sort}.json`)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            files: data.data.children,
            after: data.data.after,
            before: data.data.before,
          });
          window.scrollTo(0, 0);
        })
        .catch(console.log);
    }

    render() {
      let contentJSX;
      if (this.state.files.length > 0) {
        let pagingJSX;
        const buttonNext = <button className="btn btn-primary" type="submit" onClick={this.nextPage}>Next</button>;
        const buttonPrev = <button className="btn btn-secondary" type="submit" onClick={this.prevPage}>Previous</button>;
        if (this.state.after === null && this.state.before !== null) {
          // last page
          pagingJSX = <div>{buttonPrev}</div>;
        } else if (this.state.before === null && this.state.after !== null) {
          // first page
          pagingJSX = <div>{buttonNext}</div>;
        } else if (this.state.before !== null && this.state.after !== null) {
          // in between pages
          pagingJSX = (
            <div>
              {buttonPrev}
              {' '}
              <span className="p-3 text-black-50">
                Page
                {this.state.page}
              </span>
              {' '}
              {buttonNext}
            </div>
          );
        } else {
          pagingJSX = <div>No Posts found.</div>;
        }
        contentJSX = (
          <div className="m-2">
            <Wallpapers files={this.state.files} />
            <br />
            <div className="center-block m-2">{pagingJSX}</div>
          </div>
        );
      } else {
        contentJSX = <div className="p-2"><center>Loading...</center></div>;
      }

      return (
        <div className="DD">
          <Container fluid>
            <Row>
              <Col><ScrollingWidget /></Col>
            </Row>
            <Row>
              <Col>
                <h1>Find Trade Opportunities</h1>
              </Col>
            </Row>
            {contentJSX}
          </Container>
        </div>
      );
    }
}

export default DD;
