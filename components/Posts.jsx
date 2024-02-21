"use client"

import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';
import { useRouter } from 'next/navigation'
const useStyles = makeStyles((theme) => ({
  postCard: {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1), // Add some border-radius for rounded corners
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a box shadow for depth
    width: '500px',
    height: '500px',
  },
  postContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center', // Center text horizontally
  },
  author: {
    fontWeight: 'bold',
    fontSize: '1.5rem', // Adjust font size for author name
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: '2.5rem', // Adjust font size for title
    marginBottom: theme.spacing(1),
  },
  content: {
    fontSize: '1.6rem', // Adjust font size for content
  },
}));

const PostCard = ({ data }) => {
    const router = useRouter();

  const classes = useStyles();

  return (
    <div className={classes.postCard}>
      {data.map((each) => (
        <div key={each.id} className={classes.postContent}>
          <div className={classes.author}>{each.author.name}</div>
          <div className={classes.title}>{each.title}</div>
          <div className={classes.content}>{each.content}</div>
        </div>
      ))}

         

         <Button  btnName={"Create account"} btnFunction={ ()=>router.push('/account') }/>


     </div>
  );
};

export default PostCard;
