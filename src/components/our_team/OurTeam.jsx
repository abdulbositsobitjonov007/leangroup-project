

function OurTeam(info) {
  return (
    <div className="flex flex-col items-center text-center gap-[10px]">
        <div className=" overflow-hidden">
            <img className="rounded-full" src={info.photo} alt="" />
        </div>
        <h4 className="">{info.fullName}</h4>
          <p className="text-[13px] text-[#919399] max-w-[170px] leading-[13px]">{info.status}</p>
          <p className="text-[13px] max-w-[170px] font-[600] leading-[13px]">{info.telNumber}</p>
          <p className="text-[13px] max-w-[170px] font-[600] leading-[13px]">{info.persNumb}</p>
          <p className="text-[13px] max-w-[170px] font-[600] leading-[13px]">{info.email}</p>
    </div>
  )
}

export default OurTeam;