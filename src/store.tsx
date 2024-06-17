import { create } from 'zustand'

// export interface Option {
//   value: string
//   label: string
//   disable?: boolean
//   /** fixed option that can't be removed. */
//   fixed?: boolean
//   /** Group the options by providing key. */
//   [key: string]: string | boolean | undefined
// }

// type FuzzieStore = {
//   googleFile: any
//   setGoogleFile: (googleFile: any) => void
//   slackChannels: Option[]
//   setSlackChannels: (slackChannels: Option[]) => void
//   selectedSlackChannels: Option[]
//   setSelectedSlackChannels: (selectedSlackChannels: Option[]) => void
// }

export const useGptStore = create()((set) => ({
    user: null,
    conversationList: [],
    updateUser: (newUser: any) => set(() => ({
        user: newUser
    })),
    updateConversationList: (newConversation: any) => set((state: any) => ({
        conversationList: [...state.conversationList, newConversation]
    })),
    teamList: [],
    activeTeamDetails: {},
    updateTeamList: (teamData: any) => set((state: any) => ({
        teamList: teamData
    })),
    updateActiveTeamDetails: (newTeam: any) => set(() => ({
        activeTeamDetails: newTeam
    })),
    activeConversation: [{
        question: 'How Are you?',
        answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere laudantium aut nihil blanditiis sunt maiores possimus quos voluptatibus ut, fugit ratione soluta repudiandae deleniti necessitatibus, delectus iste! Vitae, rerum!
        Rem ea nulla, quidem iusto soluta modi voluptatibus nobis eum deleniti amet obcaecati nam odio veniam dolore natus magnam rerum deserunt totam aut quos nesciunt laborum blanditiis, voluptatum ad! Non.
        Hic dicta aperiam ut, suscipit ipsa vel incidunt rerum quas modi magni aliquid harum asperiores? Aliquam dignissimos repellendus nostrum similique vero consectetur rerum ab quo. Corrupti aut debitis optio laboriosam.
        Alias sequi blanditiis doloribus explicabo quisquam! Id, totam! Repudiandae nemo autem totam vero dolores. Quo eaque atque, error voluptate veniam omnis eum ex doloribus a quam culpa dolorum sapiente? Perspiciatis.
        Impedit dolorum nisi optio omnis illum porro enim molestias eos doloremque odit similique beatae error commodi libero odio, sint exercitationem, dignissimos provident, iusto et sunt ipsa? Libero voluptate explicabo repellendus!
        Asperiores, aut. Expedita ea asperiores quia modi aperiam doloremque ducimus dolorum ipsam, fugiat quasi fugit magni sit repellendus a molestiae veniam laborum quas et vero dolores quis mollitia ratione? Et.
        Aliquid incidunt voluptatum architecto exercitationem, necessitatibus vero iste obcaecati veniam optio aut similique voluptas ullam maiores voluptates? Quia illo excepturi unde? Eius fugiat beatae enim veniam rem alias. Exercitationem, quo.
        Ullam, at. Sunt explicabo enim ad et aspernatur alias possimus porro provident aliquid molestias, facilis modi sequi impedit nobis nisi fugiat voluptatibus quam eaque temporibus amet ratione aperiam. Suscipit, soluta!
        Beatae laudantium quisquam modi illum rem? Voluptas tenetur error sapiente? Expedita excepturi quos temporibus laborum dolorum minima nulla tempora perspiciatis, facere rerum nesciunt nam minus totam obcaecati molestias impedit sint.
        Obcaecati soluta atque asperiores repellendus quae assumenda tempore ab error similique nostrum aut nulla ex labore temporibus eius, architecto tempora! Reiciendis necessitatibus omnis a eligendi optio amet ducimus natus eius!
        Quo ducimus harum inventore quaerat excepturi enim ab, asperiores illo libero officiis, commodi quas, alias aliquam incidunt aliquid? Quo facere recusandae quis dolore, quas dignissimos ipsam dolores doloremque nihil harum?
        Odit totam fugit, doloremque sed cum quis, adipisci cupiditate voluptates magnam rerum accusantium tempore explicabo aperiam, libero nemo enim distinctio architecto dolor voluptatem maxime repellat quod id nobis. Nam, dicta.
        Pariatur eos unde aliquid architecto et iusto minus modi fugiat nam ut excepturi eum, itaque quibusdam fuga saepe veniam totam voluptatum ipsam accusantium incidunt reiciendis iste! Ipsa amet cupiditate ipsum!
        Sequi fuga praesentium pariatur earum sit! Dolorum magnam odit ad perferendis nam nulla libero eveniet illo laborum et quis quos recusandae suscipit minus, vel fugit veritatis. Qui fugit aliquam voluptatibus.
        Quae tempore unde veniam recusandae quia illum, repellendus amet quam suscipit aperiam animi beatae consequuntur laudantium minima. Voluptas temporibus impedit earum porro perferendis nemo dignissimos nulla dolorum at, quod doloremque.
        Ipsam at nesciunt quo aliquid sunt illo, fugit, officiis rerum ad atque, repellendus quos eum temporibus possimus dolorem voluptate facilis quaerat illum perspiciatis eligendi magni eveniet ipsum maiores! Incidunt, maiores!
        Aliquam eveniet illum atque sed cupiditate hic, quia eius minus, necessitatibus, dicta nemo nihil ipsa unde neque quisquam! Sunt earum dolorum id? Minima sapiente vitae accusamus dolorum eius ab quam.
        Eligendi blanditiis repellendus hic facilis perferendis dicta? Mollitia perspiciatis quae excepturi. At iure exercitationem repellat sequi omnis maiores soluta illo, ullam, quam quod voluptate doloribus eligendi officia error molestias nisi.
        Nisi delectus sapiente illo, porro numquam libero magni repellendus dolor quasi dolore eos, architecto laborum natus reiciendis consectetur amet obcaecati quidem nam voluptas in vitae commodi? Odio at dolorum natus.
        Dolores qui similique illum perspiciatis corrupti dolorum voluptate officia harum deleniti nobis, cupiditate, dignissimos voluptas. Eveniet maiores accusantium deleniti corrupti, nesciunt sed quisquam rem temporibus voluptas voluptatem maxime! Ea, explicabo!
        Ratione, est blanditiis odio obcaecati veniam eligendi reprehenderit culpa ipsa dolorem numquam, asperiores totam a corrupti amet sequi optio facilis cum non nesciunt corporis. Enim, mollitia. Inventore repellat repellendus perspiciatis.
        Debitis assumenda nostrum veniam porro nam dolores doloribus quisquam quod culpa, iste repudiandae quos omnis officia tempore, sed eum repellat odit atque. Molestiae distinctio voluptas laboriosam laudantium aperiam sequi voluptatum.
        Commodi, culpa sunt delectus maxime magni, veniam sapiente blanditiis, voluptatem quibusdam aut dolorum. Laudantium, magni! Harum voluptatem natus vel veritatis cum possimus, quae facere eaque ut deserunt sapiente ipsam minus?
        Error hic corrupti voluptatum cupiditate eius minima temporibus consequuntur modi. Quod odio, blanditiis nulla necessitatibus placeat eius incidunt nesciunt, temporibus quidem enim molestias obcaecati. Nobis deserunt iure suscipit sit distinctio.
        Maiores minima sint ipsam amet consequuntur nisi, et totam id non temporibus dolore vel quam doloremque ut architecto est qui libero aliquid provident. Dignissimos nam obcaecati architecto, commodi eum quod?
        Quam labore, vitae ratione inventore deleniti cum praesentium numquam dolores natus? Quaerat commodi rerum libero illum dolorem repellat voluptate expedita tenetur recusandae eligendi quisquam vero, nobis, totam quam, alias magnam.
        Aliquid libero, eos tenetur minus deleniti dolore, et corrupti nam veritatis nesciunt fuga corporis veniam repudiandae exercitationem quasi officiis in atque nobis consequuntur temporibus molestias, dolorem ea. Animi, eum vero!
        Facilis laboriosam similique soluta ullam placeat voluptas quam iusto maiores perspiciatis ipsam aspernatur dignissimos quos, ab vitae voluptates dolore doloremque nisi illo maxime est quia ratione, odit dicta sunt! Accusamus.
        Ratione quam saepe, laudantium temporibus totam fugit dolorem aliquid repellat culpa obcaecati exercitationem itaque odit ducimus! Soluta est quod, rerum nostrum delectus provident consequuntur cum tenetur dolor totam perspiciatis! Eius.
        Esse, aliquam laudantium! Corrupti beatae omnis recusandae numquam fugiat voluptate commodi, doloribus facere aliquam praesentium qui similique nesciunt atque veniam soluta minima consequuntur corporis adipisci officiis! Corrupti officia placeat saepe?
        Animi ab voluptate sed eveniet, necessitatibus consequuntur autem dignissimos libero, a quam dicta esse perspiciatis quia incidunt fugiat dolores quisquam culpa, ducimus quas eius aspernatur quibusdam! Perferendis ab voluptatum necessitatibus.
        Alias tempora qui ipsam, ex reiciendis iusto corporis ab itaque maxime porro similique impedit, ipsa aut eos blanditiis nulla, illum eligendi? Distinctio neque id facere magni minus illo maxime sequi!
        Ab modi dolorem pariatur soluta unde possimus blanditiis quos, id obcaecati praesentium, repellat dicta tenetur a quae provident at cumque sint harum similique perspiciatis quidem laborum. Rem at earum voluptatibus!
        Dolor tempora quam assumenda, officia delectus amet ipsum porro, quisquam soluta harum, cupiditate corrupti placeat voluptas enim. Quidem esse illo veritatis exercitationem assumenda tenetur quam amet omnis sint, at ullam.
        Repellat adipisci temporibus dicta nisi dolores similique animi at sint ab eum eaque quod voluptatem quae, error eveniet, id autem, quidem voluptatum explicabo debitis neque sapiente architecto ad? Molestias, numquam.
        Iure veritatis incidunt ducimus autem asperiores iusto rem exercitationem earum ea nulla rerum nesciunt accusamus, odio corrupti aliquam quod est eos cum omnis voluptatem, tempore quidem libero repellat? Debitis, iusto.
        Aut inventore beatae deserunt. Dolorum aut cupiditate, qui nisi a laboriosam porro consequatur non hic tenetur itaque obcaecati expedita explicabo quaerat enim assumenda perferendis odit sint iure? Aspernatur, rerum neque.
        Porro magnam incidunt, in eligendi maiores tempore iste inventore! Quam rerum, harum, nam praesentium earum quisquam ab architecto, consequatur amet reprehenderit exercitationem distinctio alias? Corporis a voluptatum consectetur libero nobis!
        Aut molestias unde commodi debitis odit. Quibusdam provident repellat alias maiores autem tempore unde? Soluta numquam adipisci voluptatibus neque saepe dolore repellat nulla veritatis culpa, voluptates ipsa illo repellendus id.
        Repellat facilis ipsum tempore necessitatibus possimus ad laboriosam et reiciendis facere nobis quam voluptate, impedit fugiat voluptatem ducimus nulla ullam officiis accusamus! Quas eveniet similique eius rerum eum labore placeat.
        Nihil sit ducimus nostrum. Repudiandae officia ipsam debitis cupiditate laudantium amet consequatur reprehenderit delectus dolore blanditiis, nostrum autem dolorem dolorum quod sit? Aperiam illum accusamus exercitationem expedita in eius! Sint.
        Facilis error natus cupiditate exercitationem ab veritatis nostrum corporis omnis possimus vitae fugiat, provident maxime ipsa ratione quasi incidunt tempore ex quo esse libero deleniti, consequuntur culpa. Magni, nemo voluptatibus.
        Est praesentium, repudiandae optio ipsam odio ratione. Sint molestiae voluptates ratione necessitatibus quae, voluptatum amet quidem rem numquam cumque nesciunt voluptas minus repellendus ea iure illum ipsa hic. Assumenda, eius!
        Quae temporibus, nam repudiandae libero minus laboriosam iure amet rem recusandae soluta molestias magni magnam ut eaque ipsum? Voluptatem dolores assumenda consequuntur deserunt nihil temporibus officiis facilis fugit atque nostrum!
        Recusandae iure officia dolores magni facilis veritatis beatae illo sapiente sed vel iste minima debitis, vero nobis saepe natus perspiciatis nam quos a ex aliquid nihil provident, eos accusantium? Velit.
        Sit soluta cumque sint quibusdam debitis? Cumque, dolore officia dolores nemo ipsum aliquam aliquid quo sit, accusamus repellat iure eius a magnam blanditiis doloremque eos architecto neque, qui mollitia ex?
        Laudantium, suscipit. Sequi et recusandae debitis ullam vero nesciunt velit soluta, expedita dolorem harum tempore error repudiandae voluptate dolores quibusdam quaerat consectetur minima aliquid qui laboriosam. Deleniti obcaecati blanditiis eligendi.
        Dignissimos animi expedita neque ad, doloribus dolorum iure, ut cupiditate veritatis minus perferendis temporibus fugit quam numquam tenetur, laborum officiis. Porro itaque odio velit ratione iusto amet exercitationem magnam sit?
        Deleniti minus impedit iusto praesentium ipsam dolorum quo odit cumque nulla aut cum, laboriosam rem sunt assumenda magnam facere vitae incidunt neque consequuntur optio quia mollitia veritatis quas animi. Consectetur!
        Facere quidem eius esse natus neque est minima labore aut cum atque totam quam, repellat, libero expedita beatae iure! Repellat consequatur illo aut consectetur, esse eius vero amet laudantium molestiae?
        Sunt iste ullam facere at ipsa unde quis minus sed dolorem, numquam quisquam libero, est ad illo sapiente eum atque facilis nisi, consequuntur mollitia. Laboriosam pariatur veniam rem illum voluptas!
        Esse magnam saepe, quae praesentium, quis sed omnis quia placeat recusandae corporis vero ab sequi maiores a illum nesciunt. Nulla neque officiis consequuntur mollitia, sequi commodi rem dolorum odit sed?
        Commodi incidunt earum consectetur explicabo velit veritatis tenetur quam deserunt quas, a tempora eligendi, ipsa officia. Consequuntur tempore quia aperiam incidunt, vitae reprehenderit nesciunt quis blanditiis quam fugit, fugiat molestias!
        Neque est ducimus aperiam eius amet eaque quo laudantium beatae in officia, dicta voluptates iure consequuntur hic nam facere, doloribus dolorum nisi officiis natus, minima nulla recusandae! Magni, quasi dignissimos!
        Itaque eos magni recusandae tenetur cupiditate, quisquam obcaecati ipsam architecto quibusdam numquam quasi deserunt? Temporibus maxime nemo distinctio ipsa alias, cumque, ullam in ratione culpa, expedita vero consectetur quidem architecto.
        Laudantium mollitia laboriosam expedita eius quod laborum, perspiciatis ut deleniti illum quis explicabo et temporibus facere nobis dolorem omnis, distinctio, maiores officiis? Sapiente reprehenderit velit vero repellat impedit quis ducimus?
        Deserunt cupiditate perspiciatis corrupti ipsam ea facere, rem praesentium fugiat? Adipisci ut eligendi aliquam asperiores? Amet illo blanditiis in repellat impedit, maxime laudantium ea laboriosam ab facilis sint, rem nobis.
        Ipsam fugit non tenetur et eligendi. Repellat aspernatur unde officiis fugit, odio possimus esse doloremque ducimus vitae quos enim quas numquam autem sint accusantium, animi saepe quibusdam qui iusto voluptatibus.
        Modi id vero quae voluptatem et reprehenderit, earum eum eligendi, dolores quibusdam perspiciatis nostrum corporis dolorem eaque? Obcaecati odit magnam inventore vero. Praesentium possimus iure quia sapiente ea? Ipsa, quod!
        Perspiciatis obcaecati laudantium aut consequuntur totam cupiditate assumenda commodi saepe, doloremque dolore eveniet accusantium itaque libero tenetur officiis ipsam similique magni. Rerum cumque quisquam nesciunt quasi sapiente fugiat a maxime?
        Nam error, voluptatibus rerum culpa maxime omnis eligendi explicabo, hic ut quas minima a, aliquam dolore quae molestias quos fugit totam accusantium aliquid nobis voluptas! Fugit reprehenderit modi mollitia doloribus?
        Voluptas non laborum mollitia rerum debitis adipisci aliquid praesentium porro repellendus quisquam officia aperiam, esse doloribus necessitatibus beatae rem voluptate vitae et, aliquam consectetur? Eaque nihil perspiciatis eveniet ad voluptatem!
        Provident modi exercitationem dolorem rem, consequatur, doloremque aliquid perspiciatis rerum quos atque, quae cupiditate! Eius, accusantium fugiat sunt modi, non consequatur eligendi inventore repudiandae hic, cum beatae quae aut. Itaque!
        Fuga quisquam voluptates commodi! Non rerum ipsum, necessitatibus dignissimos perferendis modi id facilis deleniti atque soluta vero, temporibus vel animi aspernatur cum? Architecto error quaerat ipsa rem, ipsum culpa dolor.
        Necessitatibus blanditiis omnis accusantium ratione autem molestiae non nulla, repellendus soluta! Eum temporibus alias perferendis nemo sapiente. Saepe voluptate deserunt laboriosam, numquam, eveniet veniam, provident officiis soluta laborum ipsum nemo.
        Quisquam odit ab molestiae ipsa tempore ea illo adipisci ad dolores eligendi accusamus, ipsum dolorum obcaecati excepturi porro ullam minima sapiente delectus, voluptatibus rerum maiores doloremque officiis quia a? Esse.
        Assumenda maiores sint ipsam? Architecto, explicabo officia. Optio quaerat fuga corporis quos tempora in expedita eaque quasi nihil rem at laboriosam esse est voluptatum illum, tempore assumenda laudantium repellendus quisquam!
        Eaque veritatis illo sit reprehenderit molestias, sed cum incidunt quibusdam quisquam? Enim hic beatae fuga ea delectus. Repudiandae similique numquam earum facilis modi ratione officia. Libero explicabo aspernatur beatae dolorum.
        Ipsum dicta error nam provident. Harum sed praesentium sapiente veniam tempore adipisci, ipsam deserunt explicabo velit itaque, omnis iusto nulla, neque laborum fugit alias saepe culpa ab? Sequi, iusto nemo.
        Quas, odit sint optio placeat alias porro, aliquid vel tempora unde odio veniam labore cupiditate reprehenderit deleniti voluptate, numquam autem. Error dolore, nostrum facere distinctio velit reprehenderit consequatur dignissimos maxime.
        Ea animi quos eius unde perferendis assumenda voluptate tempora veritatis culpa, eaque natus atque consequuntur dolorem mollitia voluptatem qui at error dolore illum repellendus nobis neque rerum consectetur nam! Sed?
        Tempore illo optio repudiandae fuga cumque quam! Laboriosam consequuntur nisi odit placeat cumque obcaecati debitis optio sed fugiat quibusdam inventore asperiores tenetur accusantium reprehenderit, deleniti sequi, voluptates maiores, commodi voluptatibus!
        Vel voluptatibus provident aspernatur, repellat earum libero incidunt consectetur voluptates sequi, eveniet nobis ea eius, architecto quibusdam laborum veritatis distinctio? Earum laudantium, voluptate aspernatur voluptas unde tempore illo cum asperiores.
        Magnam possimus aspernatur placeat sed laudantium molestias libero, voluptates blanditiis sequi. Recusandae quidem quos commodi delectus tempore! Inventore quidem, dolorem labore, nesciunt aut harum eius quo officiis sapiente facilis assumenda?
        Expedita nostrum maiores, possimus perferendis corrupti esse quam voluptatum dolor quidem commodi iste cum numquam distinctio! Totam tempora nisi velit, minus provident iste quis sapiente? Nihil esse asperiores enim consequatur!
        Quae modi consequuntur nemo earum consequatur ex incidunt minima veritatis tempora perferendis odio, assumenda omnis rerum aperiam possimus recusandae voluptatibus dolorum aliquam tenetur ut commodi et molestias cum est? Quidem!
        Odit facilis sed quis suscipit. Ab, quia blanditiis. Nam voluptates soluta corrupti quaerat aperiam nobis eaque eos, facere harum tenetur repellendus. Impedit cum facere labore fugit nisi nobis error architecto?
        Aliquid totam nihil quam doloremque, ex hic culpa fugiat tenetur, explicabo libero dolore! Architecto cupiditate quos repellat delectus ea molestias, quaerat atque deleniti sapiente tempora at magni eligendi qui consequuntur!
        Dolor accusamus, aliquam quasi quos fugiat omnis. Doloremque quos molestiae voluptates unde voluptatum, asperiores velit vel officiis optio sed mollitia necessitatibus. Nisi officiis enim voluptas minima amet velit veritatis eveniet.
        Optio, et rem pariatur expedita nisi assumenda ducimus? Alias rem nisi, modi, aspernatur impedit nesciunt adipisci corporis assumenda reprehenderit molestiae corrupti delectus quos nostrum asperiores? Reprehenderit similique sunt laboriosam possimus.
        Et dolorum alias ducimus amet, mollitia, esse explicabo nulla ullam autem eos quos repudiandae necessitatibus reiciendis, accusamus nemo aspernatur perspiciatis aut cupiditate! Quaerat, numquam vitae! Aliquid obcaecati quasi beatae excepturi.
        Magni, dolores dolore ratione obcaecati id ipsum ipsam quidem quas! Ea ipsum consectetur ut quibusdam ullam molestias, dolorum error exercitationem assumenda earum eius iste expedita provident aperiam hic quasi et.
        Repellat fugit rem explicabo, corrupti odio vel temporibus aut voluptates error vitae quis tempore a voluptatibus inventore, facere, qui aliquam perspiciatis pariatur eos autem totam atque doloremque obcaecati fugiat! Nisi!
        Doloribus corporis ipsa quos quibusdam tenetur, fugiat quas dolore est ipsam maxime. Ea quam ipsa doloribus sapiente tempora? Amet fuga beatae reiciendis suscipit aliquid, harum et voluptatum. Molestias, officia cum.
        Debitis quae odio sint magnam? Inventore consequuntur cum earum tempora voluptas omnis exercitationem non veritatis magni id eos, sequi maiores? Possimus corrupti accusantium illum. Quisquam nemo pariatur eaque aperiam sequi.
        Corrupti harum magnam minima? Tenetur cupiditate fugiat laborum modi repellendus eos hic, consectetur asperiores dolorum accusantium similique exercitationem id quos. Doloremque magni veniam facilis aliquid sint, culpa dolor? Inventore, minima.
        Voluptatum eaque voluptatibus aperiam dolorem hic dolor! Non, sapiente expedita hic, voluptate molestiae, accusantium eveniet magnam ad cumque incidunt aliquid rem impedit eos facere? In neque labore dolorum. Suscipit, magni?
        Optio perferendis cupiditate illum exercitationem deleniti. Neque iusto repellat veniam harum debitis labore officiis, nobis id temporibus dolores voluptate, fugit ex a iste itaque tempore dolor eum cumque quos maxime.
        Voluptas laudantium optio excepturi aut? A deserunt earum fugiat optio, cum velit esse, nemo ullam nesciunt provident rerum sint deleniti nisi odit molestiae iusto atque laudantium facilis labore debitis! Temporibus.
        Illo corrupti distinctio officiis, incidunt reiciendis mollitia debitis adipisci, explicabo pariatur, labore aut eius iure obcaecati nisi commodi harum fuga ratione velit autem sit veniam vitae ab. Accusamus, sed magni.
        Reprehenderit tempore nulla accusantium corporis mollitia incidunt? Numquam dignissimos itaque nesciunt non placeat! Quaerat reiciendis praesentium libero similique non. Id alias accusamus ad repellendus. Repudiandae nihil minima mollitia harum est.
        Nulla, maiores incidunt nam ratione at ullam sequi accusamus. Non itaque culpa illum deleniti animi doloremque impedit. Velit alias eius ipsum, ad exercitationem perspiciatis facere! Repellat aliquam nemo iure laudantium.
        Itaque ipsa cupiditate provident est accusamus eveniet deleniti! A sunt culpa hic possimus ullam accusamus excepturi, illo, et ipsam fugit eum quos magni, cupiditate aut praesentium laborum obcaecati veritatis explicabo?
        Quos fugit reiciendis eaque voluptatibus, facere architecto repellat harum! Ratione, impedit? Explicabo at illo assumenda natus provident expedita amet omnis mollitia. Minima amet earum provident necessitatibus atque soluta voluptas harum?
        Minus eveniet minima ducimus error nihil? Delectus, similique! Ex, rem impedit! Fugit voluptatem aliquam itaque soluta incidunt dolorum non in alias quasi nemo hic ab eligendi ullam perspiciatis, enim reprehenderit.
        Vitae cupiditate modi molestiae, quo voluptate tempore porro necessitatibus laboriosam veritatis eaque assumenda aliquam eligendi asperiores voluptatum? Ducimus eligendi sed, obcaecati quis asperiores maiores fugit praesentium, sint hic architecto quos.
        Rem accusamus ab nesciunt, quibusdam, doloremque aperiam id consectetur eaque atque recusandae sunt optio vitae ut exercitationem! Eos, odit est officia autem temporibus iste quas id iusto. Optio, dolorem explicabo?
        Similique illo libero eaque. Earum nemo maxime amet, magni, repellat fugit modi animi minima deleniti et debitis? Sequi laborum harum necessitatibus aut, quibusdam et, incidunt, alias ex praesentium quidem fugit.
        Quia fugiat officia neque quidem iusto voluptas id cupiditate voluptatum placeat inventore voluptate obcaecati, dignissimos officiis cumque tenetur dicta! Dignissimos sed esse accusamus placeat nam aliquid excepturi praesentium ut quas?
        Est expedita veritatis ratione aut doloremque ullam corrupti eligendi totam eius eaque vel explicabo et obcaecati libero id magnam possimus vero labore odit quibusdam, voluptas ipsam laboriosam. Magni, dolorem blanditiis.`
    }]
}))
