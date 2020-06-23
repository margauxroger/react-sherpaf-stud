import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectActiveStudent } from '../actions';


class Student extends Component {
  handleClick = () => {
    this.props.selectActiveStudent(this.props.student);
    console.log(this.props);
  }

  render() {
    return (
      <div className="frontside mb-3">
          <div className="card-student-list" onClick={this.handleClick} data-email=""data-name="" data-score="" data-photo="" data-label="" data-value="">
            <div className="card-body-student">
              <div className="photo-nom">
                <img src={this.props.student.picture_url} alt=""/>
                <h20 className="card-title">
                  {this.props.student.first_name}
                </h20>
              </div>
              <p className="card-student-text flex-grow-1">Hello</p>
              <p>{this.props.student.grade} / 100</p>

              <div className="eye-icon">
                <img className="student-details-icon"src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMTgxLjM3NSA1My44NTQtMzMuMzE1LTMzLjMxNWgtMTE1LjAwNXYyMDMuMTY4aDE0OC4zMnoiIGZpbGw9IiM2M2JjZTciLz48cGF0aCBkPSJtMTQ4LjA2IDIwLjUzOWgtMTguNWwzMy4zMTUgMzMuMzE1djE2OS44NTNoMTguNXYtMTY5Ljg1M3oiIGZpbGw9IiM2M2UyZTciLz48cGF0aCBkPSJtMzMuMDU1IDIwLjUzOWgxOC41djIwMy4xNjdoLTE4LjV6IiBmaWxsPSIjNjM3N2U3Ii8+PHBhdGggZD0ibTYyLjY5IDE2Ny44MDNoMTkuOTQ3djU1LjkwNGgtMTkuOTQ3eiIgZmlsbD0iIzllOWU5ZSIvPjxwYXRoIGQ9Im05Ny4yNDEgMTUwLjE4OWgxOS45NDd2NzMuNTE4aC0xOS45NDd6IiBmaWxsPSIjZjhhZjIzIi8+PHBhdGggZD0ibTEzMS43OTMgMTM5LjAzOWgxOS45NDd2ODQuNjY3aC0xOS45NDd6IiBmaWxsPSIjZjQ2Mjc1Ii8+PHBhdGggZD0ibTQ1Ljk5NCA1My44NTRoNTMuMzR2NTMuMzRoLTUzLjM0eiIgZmlsbD0iI2Y0NjI3NSIvPjxjaXJjbGUgY3g9IjcyLjY2NCIgY3k9IjY4Ljc3NyIgZmlsbD0iIzllOWU5ZSIgcj0iOC45NjkiLz48cGF0aCBkPSJtNzIuNjY0IDc3Ljc0NmExMi4zNjkgMTIuMzY5IDAgMCAxIDEyLjM2OSAxMi4zN3YxMS4xMjVhMCAwIDAgMCAxIDAgMGgtMjQuNzM5YTAgMCAwIDAgMSAwIDB2LTExLjEyNWExMi4zNjkgMTIuMzY5IDAgMCAxIDEyLjM3LTEyLjM3eiIgZmlsbD0iIzYzYmNlNyIvPjxwYXRoIGQ9Im00NS45OTQgMTEzLjk1M2g1My4zNHY1LjMzM2gtNTMuMzR6IiBmaWxsPSIjZjhhZjIzIi8+PHBhdGggZD0ibTQ1Ljk5NCAxMjYuMDQ1aDUzLjM0djUuMzMzaC01My4zNHoiIGZpbGw9IiNmOGFmMjMiLz48Y2lyY2xlIGN4PSIxODEuMzc1IiBjeT0iOTUuNDI0IiBmaWxsPSIjOWU5ZTllIiByPSI0MS41NyIvPjxwYXRoIGQ9Im0xODEuMzc1IDUzLjg1NGE0MS42NjYgNDEuNjY2IDAgMCAwIC05LjI1IDEuMDQ2IDQxLjU2NiA0MS41NjYgMCAwIDEgMCA4MS4wNDkgNDEuNTY5IDQxLjU2OSAwIDEgMCA5LjI1LTgyLjA5NHoiIGZpbGw9IiNjZWNlY2UiLz48cmVjdCBmaWxsPSIjZjQ2Mjc1IiBoZWlnaHQ9IjcxLjIyOCIgcng9IjEyLjk4NiIgd2lkdGg9IjI1Ljk3MyIgeD0iMTY4LjM4OCIgeT0iMTUyLjQ3OSIvPjxwYXRoIGQ9Im0xODEuMzc1IDE1Mi40NzlhMTIuOTQ0IDEyLjk0NCAwIDAgMCAtOS4yNSAzLjkgMTIuOTM5IDEyLjkzOSAwIDAgMSAzLjczNiA5LjA4NXY0NS4yNTZhMTIuOTM5IDEyLjkzOSAwIDAgMSAtMy43MzYgOS4wODUgMTIuOTY2IDEyLjk2NiAwIDAgMCAyMi4yMzYtOS4wODV2LTQ1LjI1NWExMy4wMjUgMTMuMDI1IDAgMCAwIC0xMi45ODYtMTIuOTg2eiIgZmlsbD0iI2Y0ODg3NSIvPjxwYXRoIGQ9Im0xODEuMzc1IDY5LjN2MjYuMTI0aC0yNi4xMjJhMjYuMTIxIDI2LjEyMSAwIDEgMCAyNi4xMjItMjYuMTI0eiIgZmlsbD0iI2Y4YWYyMyIvPjxwYXRoIGQ9Im0xODEuMzc1IDY5LjNhMjYuMTIxIDI2LjEyMSAwIDAgMCAtMjYuMTIxIDI2LjEyMWgyNi4xMjF6IiBmaWxsPSIjZjQ2Mjc1Ii8+PGcgZmlsbD0iIzNmMzY3OSI+PHBhdGggZD0ibTI1Ljg5IDIzMy45NjFoLTE4LjVhMS41IDEuNSAwIDEgMCAwIDNoMTguNWExLjUgMS41IDAgMCAwIDAtM3oiLz48cGF0aCBkPSJtMjQ4LjYxIDIzMy45NjFoLTE4LjVhMS41IDEuNSAwIDAgMCAwIDNoMTguNWExLjUgMS41IDAgMCAwIDAtM3oiLz48cGF0aCBkPSJtMjE1LjMzNyAyMzMuOTYxaC0xNzQuNjc0YTEuNSAxLjUgMCAxIDAgMCAzaDE3NC42NzRhMS41IDEuNSAwIDAgMCAwLTN6Ii8+PHBhdGggZD0ibTcuMzkgMjI1LjIwN2g3Ljk0NGExLjUgMS41IDAgMSAwIDAtM2gtNy45NDRhMS41IDEuNSAwIDEgMCAwIDN6Ii8+PHBhdGggZD0ibTI0MC42NjcgMjI1LjIwN2g3Ljk0NGExLjUgMS41IDAgMCAwIDAtM2gtNy45NDRhMS41IDEuNSAwIDAgMCAwIDN6Ii8+PHBhdGggZD0ibTgyLjYzNyAyMjUuMjA3aDE0Ny40NzNhMS41IDEuNSAwIDAgMCAwLTNoLTM5Ljk0M2ExNC40NTYgMTQuNDU2IDAgMCAwIDUuNjk0LTExLjQ4NnYtNDUuMjU2YTE0LjUwNiAxNC41MDYgMCAwIDAgLTEyLjk4Ny0xNC40MDh2LTEyLjZhNDMuMDU4IDQzLjA1OCAwIDAgMCAtLjg2My04Ni4wODZsLTMyLjg5LTMyLjg5MmExLjUgMS41IDAgMCAwIC0xLjA2MS0uNDM5aC0xMTVhMS41IDEuNSAwIDAgMCAtMS41IDEuNXYyMDEuNjY3aC01LjY3YTEuNSAxLjUgMCAwIDAgMCAzem0tMTguNDQ3LTN2LTUyLjkwN2gxNi45NDd2NTIuOXptMzQuNTUxIDB2LTcwLjUxOGgxNi45NDd2NzAuNTE4em0zNC41NTEgMHYtODEuNjY4aDE2Ljk0OHY4MS42Njd6bTU5LjU2OS01Ni43NDF2NDUuMjU0YTExLjQ4NyAxMS40ODcgMCAwIDEgLTIyLjk3MyAwdi00NS4yNTVhMTEuNDg3IDExLjQ4NyAwIDAgMSAyMi45NzMgMHptMjguNTgzLTcwLjA0MWE0MC4xMTYgNDAuMTE2IDAgMCAxIC00MC4wNjYgNDAuMDdoLS4wMDhhNDAuMDcgNDAuMDcgMCAxIDEgNDAuMDc0LTQwLjA3em0tNzEuODg0LTcxLjI2NSAyOC4xOTMgMjguMTk0aC0yOC4xOTN6bS0xMTUtMi4xMjFoMTEydjMxLjgxNWExLjUgMS41IDAgMCAwIDEuNSAxLjVoMTcuNTUzYTQzLjA1NiA0My4wNTYgMCAwIDAgMTQuMjYxIDgzLjF2MTIuNmExNC41MDYgMTQuNTA2IDAgMCAwIC0xMi45ODYgMTQuNDA4djQ1LjI1OGExNC40NTYgMTQuNDU2IDAgMCAwIDUuNjk0IDExLjQ4NmgtMTkuMzQydi04My4xNjdhMS41IDEuNSAwIDAgMCAtMS41LTEuNWgtMTkuOTQ4YTEuNSAxLjUgMCAwIDAgLTEuNSAxLjV2ODMuMTY3aC0xMS42di03Mi4wMTdhMS41IDEuNSAwIDAgMCAtMS41LTEuNWgtMTkuOTUxYTEuNSAxLjUgMCAwIDAgLTEuNSAxLjV2NzIuMDE4aC0xMS42di01NC40MDdhMS41IDEuNSAwIDAgMCAtMS41LTEuNWgtMTkuOTUxYTEuNSAxLjUgMCAwIDAgLTEuNSAxLjV2NTQuNGgtMjYuNjM1eiIvPjxwYXRoIGQ9Im00NS45OTQgMTA4LjY5NGg1My4zNGExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTUzLjM0YTEuNSAxLjUgMCAwIDAgLTEuNS0xLjVoLTUzLjM0YTEuNSAxLjUgMCAwIDAgLTEuNSAxLjV2NTMuMzRhMS41IDEuNSAwIDAgMCAxLjUgMS41em0xLjUtNTMuMzRoNTAuMzR2NTAuMzRoLTUwLjM0eiIvPjxwYXRoIGQ9Im03OC40MTkgNzcuNTEzYTEwLjQ2OSAxMC40NjkgMCAxIDAgLTExLjUxMiAwIDEzLjg3NyAxMy44NzcgMCAwIDAgLTguMTEzIDEyLjZ2MTEuMTI1YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgyNC43MzlhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xMS4xMjJhMTMuODc3IDEzLjg3NyAwIDAgMCAtOC4xMTQtMTIuNjAzem0tMTMuMjI1LTguNzM2YTcuNDY5IDcuNDY5IDAgMSAxIDcuNDY5IDcuNDcgNy40NzggNy40NzggMCAwIDEgLTcuNDY5LTcuNDd6bTE4LjMzOSAzMC45NjRoLTIxLjczOXYtOS42MjVhMTAuODY5IDEwLjg2OSAwIDEgMSAyMS43MzggMHoiLz48cGF0aCBkPSJtNDUuOTk0IDEyMC43ODZoNTMuMzRhMS41IDEuNSAwIDAgMCAxLjUtMS41di01LjMzM2ExLjUgMS41IDAgMCAwIC0xLjUtMS41aC01My4zNGExLjUgMS41IDAgMCAwIC0xLjUgMS41djUuMzMzYTEuNSAxLjUgMCAwIDAgMS41IDEuNXptMS41LTUuMzMzaDUwLjM0djIuMzMzaC01MC4zNHoiLz48cGF0aCBkPSJtOTkuMzMzIDEzMi44NzhhMS41IDEuNSAwIDAgMCAxLjUtMS41di01LjMzM2ExLjUgMS41IDAgMCAwIC0xLjUtMS41aC01My4zMzlhMS41IDEuNSAwIDAgMCAtMS41IDEuNXY1LjMzM2ExLjUgMS41IDAgMCAwIDEuNSAxLjV6bS01MS44NC01LjMzM2g1MC4zNHYyLjMzM2gtNTAuMzM5eiIvPjxwYXRoIGQ9Im0xNTMuNzUzIDk1LjQyNGEyNy42MjEgMjcuNjIxIDAgMSAwIDI3LjYyMi0yNy42MjQgMjcuNjUyIDI3LjY1MiAwIDAgMCAtMjcuNjIyIDI3LjYyNHptMjYuMTIxLTI0LjU3MnYyMy4wNzJoLTIzLjA3NGEyNC42NTIgMjQuNjUyIDAgMCAxIDIzLjA3NS0yMy4wNzF6bTI2LjEyNiAyNC41NzJhMjQuNjIyIDI0LjYyMiAwIDAgMSAtNDkuMiAxLjVoMjQuNTc2YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMjQuNTc2YTI0LjY1MyAyNC42NTMgMCAwIDEgMjMuMTI0IDI0LjU3NnoiLz48L2c+PC9zdmc+Cg==" />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectActiveStudent: selectActiveStudent },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeStudent: state.activeStudent
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);
