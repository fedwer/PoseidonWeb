import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import UnitProcesses from './UnitProcesses'
import GeneralReference from './GeneralReference'
import Pestle from './Pestle'
import CaseStudies from './CaseStudies'

import TreatmentTrains from './TreatmentTrains'
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  toolbar: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    justifyItems: 'center',
    justifyContent: 'space-between'
  },
  main: {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    gridTemplateColumns: '1fr',
    gridRowGap: 8,
    justifyItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: 50
  },
  title: {
    textAlign: 'left'
  },
  root: {
    flexGrow: 1,
    paddingTop: 60
  }
})

export const Learn = () => {
  const { id } = useParams<{ id: string }>()

  console.log(id)

  const classes = useStyles()

  const [menuPoint, setMenuPoint] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setMenuPoint(newValue)
  }

  return (
    <div className="App">
      <Router>
        <Paper className={classes.root} square elevation={3}>
          <Tabs value={menuPoint} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="General Reference" to="/learn/general" component={Link} />
            <Tab label="PESTLE" to="/learn/pestle" component={Link} />
            <Tab label="Unit Processes" to="/learn/unitprocesses" component={Link} />
            <Tab label="Treatment Trains" to="/learn/treatmenttrains" component={Link} />
            <Tab label="Case Studies" to="/learn/casestudies" component={Link} />
          </Tabs>
        </Paper>

        <div className={classes.main}>
          <Switch>
            <Route exact path="/learn/" component={GeneralReference} />
            <Route exact path="/learn/general" component={GeneralReference} />
            <Route exact path="/learn/pestle" component={Pestle} />
            <Route path="/learn/unitprocesses" component={UnitProcesses} />
            <Route path="/learn/treatmenttrains" component={TreatmentTrains} />
            <Route path="/learn/casestudies" component={CaseStudies} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
