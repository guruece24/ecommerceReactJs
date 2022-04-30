import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  media: { height: 180, width: 400, marginTop: '2%', },

  cardContent: { display: 'flex', justifyContent: 'space-between', width: '90%', height: '90%', fontSize: 'small'},

  cardActions: { justifyContent: 'space-between' , },

  buttons: {display: 'flex', alignItems:'center' ,},

}));