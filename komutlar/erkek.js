const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (
    !message.member.roles.cache.has("854059874623422484") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!"
        )
        .setColor("Black")
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.send(
      new Discord.MessageEmbed()
        .addField("Hatalı Kullanım", `Lütfen Bir Kullanıcı Etiketleyiniz`)
        .setColor("RANDOM")
    );
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let isim = args[1];
  if (!isim)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .addField("Hatalı Kullanım", `Lütfen Bir İsim Yazınız`)
          .setColor("RANDOM")
      )
      .then(m => m.delete({ timeout: 5000 }));
  let yas = args[2];
  if (!yas)
    return message.channel
      .send(
        new Discord.MessageEmbed()
          .addField("Hatalı Kullanım", `Lütfen Bir Yaş Yazınız`)
          .setColor("RANDOM")
      )
      .then(m => m.delete({ timeout: 5000 }));
  await member.setNickname(`${isim} | ${yas}`);
  member.roles.add("879832277817909310");
  member.roles.remove("879842619235139676");
  const kanal = message.guild.channels.cache.find(
    c => c.id == "836622651216494592"
  );
  const embed1 = new Discord.MessageEmbed()
    .setDescription(`<@!${member.id}> Arımıza katıldı.`)
    .setColor("RANDOM");
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField(
      `Kayıt İşlemi Başarılı`,
      `<@!${member.id}> **Adlı Kullanıcıya <@&879832277817909310> Rolünü Verdim ve İsmini** \n\`${isim} | ${yas}\` **Olarak Düzenledim**`
    )
    .setFooter(
      `Komutu Kullanan Yetkili : ${message.author.username}`,
      message.author.avatarURL({ dynamic: true })
    );
  return message.channel
    .send(embed)
    .then(kanal.send(embed1))
    .then(m => m.delete({ timeout: 20000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek", "e"],
  permLevel: 0
};
exports.help = {
  name: "Erkek"
};
