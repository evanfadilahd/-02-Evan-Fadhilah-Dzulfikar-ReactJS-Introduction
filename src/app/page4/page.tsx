const user = {
    nim: '2141720167',
    name: 'Evan Fadhilah Dzulfikar',
    imageUrl: 'https://pps.whatsapp.net/v/t61.24694-24/395180287_1026044225291214_2355854220633223963_n.jpg?ccb=11-4&oh=01_AdQtm4Wd_nuIF8-_VjnPrdMq61emNzAMcTCvJwPikmMdhA&oe=65F29AC7&_nc_sid=e6ed6c&_nc_cat=102',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.nim}</h1>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Nim' + 'Foto ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }