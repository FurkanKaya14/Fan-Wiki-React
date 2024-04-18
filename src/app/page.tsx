'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import foto from './images/foto.png'
import foto1 from './images/office1.png'
import foto2 from './images/office2.jpg'
import foto3 from './images/office3.jpg'
import foto4 from './images/office4.jpg'
import foto5 from './images/office5.jpg'
import foto6 from './images/office6.png'
import foto7 from './images/office7.png'
import foto8 from './images/office8.jpg'
import foto9 from './images/office9.jpg'
import foto10 from './images/office10.jpg'
import foto11 from './images/office11.jpg'
import foto12 from './images/office12.jpg'
import foto13 from './images/office13.jpg'
import foto14 from './images/office14.jpg'
import foto15 from './images/office15.jpg'
import foto16 from './images/office16.jpg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import './layout'


export default function Home() {
  return (
    <>
      {/* Dizi logosu ve text'ten oluşan header */}
      <body style={{ backgroundColor: "#17c0f2"}}>
                  
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static" style={{ backgroundColor: "#17c0f2" }}>
            <Toolbar sx={{ maxWidth: 360, justifyContent: "space-between" }}>
              <CardMedia
                component="img"
                height="100px"
                width="100px"
                image={foto.src}
                alt=""
                sx={{ marginLeft: 'auto', marginRight: 'auto' }}
              />

              <div style={{ marginLeft: "50px", fontFamily: 'American Typewriter Medium', fontSize: '24px', color: 'black', minWidth: 1200 }}>&quot;This is an environment of welcoming, and you should just get the hell out of here.&quot;<br />
                <p style={{ marginLeft: "300px", fontFamily: 'American Typewriter Medium', fontSize: '24px', color: 'black', minWidth: 1200 }}>-Micheal Scott | Regional Manager of Dunder Mifflin-</p></div>
            </Toolbar>
          </AppBar>
        </Box>
        {/* karakter foroğrafı, ve sözünden oluşan next.js ile karakterin sayfasına yönlendirme yapan kartlar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          <Link href="/pages">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto1.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Micheal Scott
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages1">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto2.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Jim Halpert
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;So this is my life. Until I win the lottery. Or Pam finally writes that series of young adult books.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages2">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto3.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Pam Beesley
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;When you&apos;re a kid, you assume your parents are soulmates. My kids are going to be right about that.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages3">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto4.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Dwight Schrute
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;Whenever I&apos;m about to do something, I think, &apos;Would an idiot do that?&apos; and if they would, I do not do that thing.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages4">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto5.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Stanley Hudson
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;I would rather work for an upturned broom with a bucket for a head than work for somebody else in this office besides myself.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages5">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto6.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Angela Martin
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                    <b>&quot;My sister and I used to be best friends, and we haven&apos;t talked in over 16 years. Over some disagreement I don&apos;t even remember.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages6">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto7.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Kevin Malone
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;The only problem is whenever I try to make a taco, I get too excited and I crush it.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages7">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto8.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Meredith Palmer
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;Hey everybody, he&apos;s not in the men&apos;s room. Although the seat was warm, so we may have just missed him.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages8">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto9.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Creed Bratton
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name? Creed Bratton.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages9">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto10.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Phyllis Vance
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                    <b>&quot;If they don&apos;t like it then they can leave - I mean, a lot of their work can be done in India.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages10">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto11.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Oscar Martinez
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;If you would have seen the look he gave me, he wanted to rock more than just my vote.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages11">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto12.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Ryan Howard
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                    <b>&quot;I&apos;m such a perfectionist that I&apos;d kinda rather not do it at all than do a crappy version.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages12">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto13.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Kelly Kapoor
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;Ultimatums are key. Basically nobody does anything for me anymore unless I threaten to kill myself.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages13">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto14.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Andy Bernard
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                  <b>&quot;I wish there was a way to know you&apos;re in the good old days before you&apos;ve actually left them.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages14">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto15.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Toby Flenderson
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                    <b>&quot;I have six roommates, which are better than friends because they have to give you one month&apos;s notice before they leave.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link href="/pages15">
            <Card sx={{ maxWidth: 360 }}>
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={foto16.src}
                  alt=""
                />
                <CardContent>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} gutterBottom variant="h5" component="div">
                    Darryl Philbin
                  </Typography>
                  <Typography style={{ fontFamily: 'American Typewriter Medium' }} variant="body2" color="text.secondary">
                    <b>&quot;I got my whole life to be a minority executive. Only have about a year left in these knees, though.&quot;</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </body>
    </>
  )
}
